# Email Setup for Newness of Life Website

## Overview
The contact form and donation system now sends email notifications through Supabase Edge Functions.

## Setup Instructions

### 1. Create Supabase Edge Function

The email function is already created at `supabase/functions/send-email/index.ts`. To deploy it:

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_ID

# Deploy the function
supabase functions deploy send-email
```

### 2. Configure Email Service

You have two options for sending emails:

#### Option A: Resend (Recommended)
1. Sign up for a free Resend account at https://resend.com
2. Get your API key from the dashboard
3. In your Supabase project settings → Edge Functions, add this secret:
   - `RESEND_API_KEY`: Your Resend API key

#### Option B: Development Mode (No setup required)
The function will automatically log emails instead of sending them if no API key is configured.

### 3. Set Environment Variables in Supabase

In your Supabase project dashboard → Settings → Edge Functions, add these secrets:

```
GMAIL_USER=newnessoflifeincorporated@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
RESEND_API_KEY=your_resend_api_key (if using Resend)
```

### 4. Gmail App Password (Optional)

If you want to use Gmail SMTP directly:
1. Enable 2-factor authentication on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an app password for "Newness of Life Website"
4. Use this as `GMAIL_APP_PASSWORD`

## What Emails Are Sent

### Contact Form
- **To**: newnessoflifeincorporated@gmail.com
- **Subject**: "New Contact Form Message from [Name]"
- **Content**: Name, email, phone, message

### Donations
- **To Donor**: Thank you email with donation details
- **To Admin**: Notification email with donation information

## Testing

1. Deploy the function
2. Test the contact form on your website
3. Check your email for notifications
4. Check Supabase Edge Function logs for any errors

## Troubleshooting

- If emails don't send, check the function logs in Supabase Dashboard
- Ensure all environment variables are set correctly
- Verify your email service (Resend) is properly configured
- In development mode, emails will be logged instead of sent
