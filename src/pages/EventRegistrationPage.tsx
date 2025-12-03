import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Home, User, Phone, Mail, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { churchInfo } from "@/lib/siteInfo";
import { useNavigate, useSearchParams } from "react-router-dom";
import { submitEventRegistration, EventRegistration } from "@/lib/api";
import { createEventRegistrationsTableDirect } from "@/lib/setupDatabase";

interface EventData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

interface RegistrationData {
  personalInfo: {
    name: string;
    phone: string;
    email: string;
  };
  attendanceType: "individual" | "family";
  familyMembers: number;
  location: "tarkwa" | "away";
  accommodationNeeded: boolean;
  accommodationDetails: {
    checkIn: string;
    checkOut: string;
    specialRequests: string;
  };
  additionalNotes: string;
}

const EventRegistrationPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Get event data from URL params
  const [event] = useState<EventData>({
    title: searchParams.get('event') || "CROSS OVER 2025 with Pastor Desmond",
    date: searchParams.get('date') || "31st December, 2025",
    time: searchParams.get('time') || "9:00 PM till dawn",
    location: searchParams.get('location') || "Newness Cathedral, Tarkwa",
    description: searchParams.get('description') || "Prophetic watch-night encounter ushering the church into 2025",
    category: searchParams.get('category') || "Annual Event"
  });

  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    personalInfo: {
      name: "",
      phone: "",
      email: ""
    },
    attendanceType: "individual",
    familyMembers: 1,
    location: "tarkwa",
    accommodationNeeded: false,
    accommodationDetails: {
      checkIn: "",
      checkOut: "",
      specialRequests: ""
    },
    additionalNotes: ""
  });

  const updateRegistrationData = (section: keyof RegistrationData, data: any) => {
    setRegistrationData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // First ensure the table exists
      const tableCheck = await createEventRegistrationsTableDirect();
      if (!tableCheck.success && tableCheck.instructions) {
        setSubmitError('Database table not found. Please contact administrator to set up the database.');
        console.error('Table setup error:', tableCheck.error);
        return;
      }
      
      // Prepare data for API
      const registrationSubmitData: EventRegistration = {
        event_title: event.title,
        event_date: event.date,
        event_time: event.time,
        event_location: event.location,
        event_description: event.description,
        event_category: event.category,
        name: registrationData.personalInfo.name,
        phone: registrationData.personalInfo.phone,
        email: registrationData.personalInfo.email || undefined,
        attendance_type: registrationData.attendanceType,
        family_members: registrationData.familyMembers,
        location_type: registrationData.location,
        accommodation_needed: registrationData.accommodationNeeded,
        check_in_date: registrationData.accommodationDetails.checkIn || undefined,
        check_out_date: registrationData.accommodationDetails.checkOut || undefined,
        special_requests: registrationData.accommodationDetails.specialRequests || undefined,
        additional_notes: registrationData.additionalNotes || undefined,
      };

      const result = await submitEventRegistration(registrationSubmitData);
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.error || "Failed to submit registration. Please try again.");
      }
    } catch (error) {
      console.error("Registration submission error:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={registrationData.personalInfo.name}
                    onChange={(e) => updateRegistrationData('personalInfo', {
                      ...registrationData.personalInfo,
                      name: e.target.value
                    })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={registrationData.personalInfo.phone}
                    onChange={(e) => updateRegistrationData('personalInfo', {
                      ...registrationData.personalInfo,
                      phone: e.target.value
                    })}
                    placeholder="05XXXXXXXX"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={registrationData.personalInfo.email}
                    onChange={(e) => updateRegistrationData('personalInfo', {
                      ...registrationData.personalInfo,
                      email: e.target.value
                    })}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Attendance Details</h3>
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">How will you be attending? *</Label>
                  <RadioGroup
                    value={registrationData.attendanceType}
                    onValueChange={(value: "individual" | "family") => 
                      updateRegistrationData('attendanceType', value)
                    }
                    className="mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Just myself</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="family" id="family" />
                      <Label htmlFor="family">With my family</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {registrationData.attendanceType === "family" && (
                  <div>
                    <Label htmlFor="familyMembers">Number of family members (including yourself) *</Label>
                    <Input
                      id="familyMembers"
                      type="number"
                      min="1"
                      max="20"
                      value={registrationData.familyMembers}
                      onChange={(e) => updateRegistrationData('familyMembers', parseInt(e.target.value))}
                      className="mt-2"
                    />
                  </div>
                )}
                
                <div>
                  <Label className="text-base font-medium">Where are you coming from? *</Label>
                  <RadioGroup
                    value={registrationData.location}
                    onValueChange={(value: "tarkwa" | "away") => 
                      updateRegistrationData('location', value)
                    }
                    className="mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tarkwa" id="tarkwa" />
                      <Label htmlFor="tarkwa">Tarkwa (Local)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="away" id="away" />
                      <Label htmlFor="away">Outside Tarkwa (Away)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Accommodation</h3>
              {registrationData.location === "away" ? (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="accommodation"
                      checked={registrationData.accommodationNeeded}
                      onCheckedChange={(checked) => 
                        updateRegistrationData('accommodationNeeded', checked)
                      }
                    />
                    <Label htmlFor="accommodation" className="text-base">
                      I need accommodation arrangements
                    </Label>
                  </div>
                  
                  {registrationData.accommodationNeeded && (
                    <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                      <div>
                        <Label htmlFor="checkIn">Preferred Check-in Date</Label>
                        <Input
                          id="checkIn"
                          type="date"
                          value={registrationData.accommodationDetails.checkIn}
                          onChange={(e) => updateRegistrationData('accommodationDetails', {
                            ...registrationData.accommodationDetails,
                            checkIn: e.target.value
                          })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="checkOut">Preferred Check-out Date</Label>
                        <Input
                          id="checkOut"
                          type="date"
                          value={registrationData.accommodationDetails.checkOut}
                          onChange={(e) => updateRegistrationData('accommodationDetails', {
                            ...registrationData.accommodationDetails,
                            checkOut: e.target.value
                          })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="specialRequests">Special Accommodation Requests</Label>
                        <Textarea
                          id="specialRequests"
                          value={registrationData.accommodationDetails.specialRequests}
                          onChange={(e) => updateRegistrationData('accommodationDetails', {
                            ...registrationData.accommodationDetails,
                            specialRequests: e.target.value
                          })}
                          placeholder="Any special needs or preferences for accommodation..."
                          className="mt-2"
                        />
                      </div>
                    </div>
                  )}
                  
                  <Alert>
                    <Home className="h-4 w-4" />
                    <AlertDescription>
                      Our team will contact you to arrange suitable accommodation based on your preferences.
                    </AlertDescription>
                  </Alert>
                </div>
              ) : (
                <Alert>
                  <Check className="h-4 w-4" />
                  <AlertDescription>
                    Since you're from Tarkwa, no accommodation is needed. We'll see you at the event!
                  </AlertDescription>
                </Alert>
              )}
            </div>
            
            <div>
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea
                id="additionalNotes"
                value={registrationData.additionalNotes}
                onChange={(e) => updateRegistrationData('additionalNotes', e.target.value)}
                placeholder="Any additional information or special requirements..."
                className="mt-2"
              />
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Registration Successful!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for registering for {event.title}. We've received your registration and will contact you soon with confirmation details.
                </p>
                <div className="space-y-2 text-left bg-muted/50 p-4 rounded-lg mb-6">
                  <p><strong>Name:</strong> {registrationData.personalInfo.name}</p>
                  <p><strong>Phone:</strong> {registrationData.personalInfo.phone}</p>
                  <p><strong>Attendance:</strong> {registrationData.attendanceType === "family" ? `Family (${registrationData.familyMembers} members)` : "Individual"}</p>
                  <p><strong>Location:</strong> {registrationData.location === "tarkwa" ? "Tarkwa (Local)" : "Away"}</p>
                  {registrationData.location === "away" && registrationData.accommodationNeeded && (
                    <p><strong>Accommodation:</strong> Required - We'll contact you soon</p>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => navigate("/events")}>
                    Back to Events
                  </Button>
                  <Button variant="outline" onClick={() => navigate("/")}>
                    Go Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Event Summary */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Button variant="ghost" size="sm" onClick={() => navigate("/events")}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-primary mb-2">{event.title}</h1>
                      <Badge variant="secondary">{event.category}</Badge>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">{event.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Event Registration</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Step {currentStep} of 3
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 mt-4">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {submitError && (
                <Alert className="mb-6 border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    {submitError}
                  </AlertDescription>
                </Alert>
              )}
              
              <form onSubmit={handleSubmit}>
                {renderStepContent()}
                
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      Previous
                    </Button>
                  )}
                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <Button 
                        type="button"
                        onClick={() => setCurrentStep(currentStep + 1)}
                        disabled={
                          (currentStep === 1 && (!registrationData.personalInfo.name || !registrationData.personalInfo.phone)) ||
                          (currentStep === 2 && (!registrationData.attendanceType || !registrationData.location))
                        }
                      >
                        Next Step
                      </Button>
                    ) : (
                      <Button 
                        type="submit"
                        disabled={isSubmitting || !registrationData.personalInfo.name || !registrationData.personalInfo.phone}
                      >
                        {isSubmitting ? "Submitting..." : "Complete Registration"}
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationPage;
