import { supabase } from "./supabaseClient";

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface DonationRecord {
  amount: number;
  method: "bank" | "mobile_money";
  purpose: string;
  donor_name?: string;
  donor_email?: string;
  donor_phone?: string;
  reference?: string;
}

export interface EventRegistration {
  event_title: string;
  event_date: string;
  event_time: string;
  event_location: string;
  event_description?: string;
  event_category?: string;
  name: string;
  phone: string;
  email?: string;
  attendance_type: "individual" | "family";
  family_members: number;
  location_type: "tarkwa" | "away";
  accommodation_needed: boolean;
  check_in_date?: string;
  check_out_date?: string;
  special_requests?: string;
  additional_notes?: string;
}

export async function sendContactMessage(data: ContactMessage) {
  // Save to Supabase
  const { error: dbError } = await supabase.from("contact_messages").insert({
    ...data,
    created_at: new Date().toISOString(),
  });

  if (dbError) {
    console.error("Failed to save contact message:", dbError);
    return { success: false, error: dbError.message };
  }

  // Send email notification
  try {
    const emailHtml = `
      <h2>New Contact Message from Newness of Life Website</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <hr>
      <p><em>This message was sent from the Newness of Life website contact form.</em></p>
    `;

    const { data: emailData, error: emailError } = await supabase.functions.invoke('send-email', {
      body: {
        to: 'newnessoflifeincorporated@gmail.com',
        subject: `New Contact Form Message from ${data.name}`,
        html: emailHtml,
      },
    });

    if (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Don't fail the whole operation if email fails
      return { success: true, warning: "Message saved but email notification failed" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: true, warning: "Message saved but email notification failed" };
  }
}

export async function recordDonation(data: DonationRecord) {
  // Save to Supabase
  const { error: dbError } = await supabase.from("donations").insert({
    ...data,
    created_at: new Date().toISOString(),
    status: "pending", // pending | confirmed | failed
  });

  if (dbError) {
    console.error("Failed to record donation:", dbError);
    return { success: false, error: dbError.message };
  }

  // Send confirmation email to donor
  if (data.donor_email) {
    try {
      const emailHtml = `
        <h2>Thank You for Your Donation!</h2>
        <p>Dear ${data.donor_name || 'Beloved Member'},</p>
        <p>We've received your donation of ₵${data.amount} via ${data.method === 'bank' ? 'Bank Transfer' : 'Mobile Money'}.</p>
        <p><strong>Purpose:</strong> ${data.purpose}</p>
        <p><strong>Reference:</strong> ${data.reference || 'N/A'}</p>
        <p>Your generosity helps us continue God's work in our community and beyond.</p>
        <p>May God bless you abundantly!</p>
        <hr>
        <p><em>Newness of Life Incorporated</em></p>
        <p><em>Tarkwa Boobobo (Opp. KFC), Western Region, Ghana</em></p>
      `;

      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-email', {
        body: {
          to: data.donor_email,
          subject: 'Thank You for Your Donation - Newness of Life',
          html: emailHtml,
        },
      });

      if (emailError) {
        console.error("Failed to send confirmation email:", emailError);
      }
    } catch (error) {
      console.error("Error sending confirmation email:", error);
    }
  }

  // Send notification email to admin
  try {
    const emailHtml = `
      <h2>New Donation Received</h2>
      <p><strong>Amount:</strong> ₵${data.amount}</p>
      <p><strong>Method:</strong> ${data.method === 'bank' ? 'Bank Transfer' : 'Mobile Money'}</p>
      <p><strong>Purpose:</strong> ${data.purpose}</p>
      <p><strong>Donor Name:</strong> ${data.donor_name || 'Anonymous'}</p>
      <p><strong>Donor Email:</strong> ${data.donor_email || 'Not provided'}</p>
      <p><strong>Donor Phone:</strong> ${data.donor_phone || 'Not provided'}</p>
      <p><strong>Reference:</strong> ${data.reference || 'N/A'}</p>
      <hr>
      <p><em>This donation was recorded via the Newness of Life website.</em></p>
    `;

    const { data: emailData, error: emailError } = await supabase.functions.invoke('send-email', {
      body: {
        to: 'newnessoflifeincorporated@gmail.com',
        subject: `New Donation Received: ₵${data.amount}`,
        html: emailHtml,
      },
    });

    if (emailError) {
      console.error("Failed to send admin notification:", emailError);
    }
  } catch (error) {
    console.error("Error sending admin notification:", error);
  }

  return { success: true };
}

export async function submitEventRegistration(data: EventRegistration) {
  // Save to Supabase
  const { error: dbError } = await supabase.from("event_registrations").insert({
    ...data,
    created_at: new Date().toISOString(),
  });

  if (dbError) {
    console.error("Failed to save event registration:", dbError);
    return { success: false, error: dbError.message };
  }

  // Send confirmation email to registrant
  if (data.email) {
    try {
      const emailHtml = `
        <h2>Event Registration Confirmed!</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for registering for <strong>${data.event_title}</strong>. We've received your registration and are excited to see you there!</p>
        
        <h3>Event Details:</h3>
        <p><strong>Event:</strong> ${data.event_title}</p>
        <p><strong>Date:</strong> ${data.event_date}</p>
        <p><strong>Time:</strong> ${data.event_time}</p>
        <p><strong>Location:</strong> ${data.event_location}</p>
        
        <h3>Your Registration Details:</h3>
        <p><strong>Attendance Type:</strong> ${data.attendance_type === "family" ? `Family (${data.family_members} members)` : "Individual"}</p>
        <p><strong>Location:</strong> ${data.location_type === "tarkwa" ? "Tarkwa (Local)" : "Away from Tarkwa"}</p>
        ${data.accommodation_needed ? `<p><strong>Accommodation:</strong> Required - We'll contact you soon to arrange this.</p>` : ''}
        
        ${data.location_type === "away" ? `
        <p><strong>Important:</strong> Since you're coming from outside Tarkwa, our team will contact you to coordinate travel and accommodation if needed.</p>
        ` : ''}
        
        <p>If you have any questions or need to make changes to your registration, please contact us at:</p>
        <p><strong>Phone:</strong> 0539368670</p>
        <p><strong>Email:</strong> newnessoflifeincorporated@gmail.com</p>
        
        <hr>
        <p>We look forward to seeing you at the event!</p>
        <p><em>Newness of Life Incorporated</em></p>
        <p><em>Tarkwa Boobobo (Opp. KFC), Western Region, Ghana</em></p>
      `;

      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-email', {
        body: {
          to: data.email,
          subject: `Registration Confirmed - ${data.event_title}`,
          html: emailHtml,
        },
      });

      if (emailError) {
        console.error("Failed to send confirmation email:", emailError);
      }
    } catch (error) {
      console.error("Error sending confirmation email:", error);
    }
  }

  // Send notification email to admin
  try {
    const emailHtml = `
      <h2>New Event Registration Received!</h2>
      
      <h3>Event Details:</h3>
      <p><strong>Event:</strong> ${data.event_title}</p>
      <p><strong>Date:</strong> ${data.event_date}</p>
      <p><strong>Time:</strong> ${data.event_time}</p>
      <p><strong>Location:</strong> ${data.event_location}</p>
      ${data.event_category ? `<p><strong>Category:</strong> ${data.event_category}</p>` : ''}
      
      <h3>Registrant Information:</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
      
      <h3>Registration Details:</h3>
      <p><strong>Attendance Type:</strong> ${data.attendance_type === "family" ? `Family (${data.family_members} members)` : "Individual"}</p>
      <p><strong>Location:</strong> ${data.location_type === "tarkwa" ? "Tarkwa (Local)" : "Away from Tarkwa"}</p>
      
      ${data.accommodation_needed ? `
      <h3>Accommodation Request:</h3>
      <p><strong>Accommodation Needed:</strong> Yes</p>
      ${data.check_in_date ? `<p><strong>Check-in Date:</strong> ${data.check_in_date}</p>` : ''}
      ${data.check_out_date ? `<p><strong>Check-out Date:</strong> ${data.check_out_date}</p>` : ''}
      ${data.special_requests ? `<p><strong>Special Requests:</strong> ${data.special_requests}</p>` : ''}
      ` : ''}
      
      ${data.additional_notes ? `
      <h3>Additional Notes:</h3>
      <p>${data.additional_notes}</p>
      ` : ''}
      
      <hr>
      <p><em>This registration was submitted via the Newness of Life website.</em></p>
      <p><em>Registration Date: ${new Date().toLocaleString()}</em></p>
    `;

    const { data: emailData, error: emailError } = await supabase.functions.invoke('send-email', {
      body: {
        to: 'newnessoflifeincorporated@gmail.com',
        subject: `New Event Registration: ${data.name} - ${data.event_title}`,
        html: emailHtml,
      },
    });

    if (emailError) {
      console.error("Failed to send admin notification:", emailError);
      // Don't fail the whole operation if email fails
      return { success: true, warning: "Registration saved but email notification failed" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending admin notification:", error);
    return { success: true, warning: "Registration saved but email notification failed" };
  }
}
