-- Create event_registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_title TEXT NOT NULL,
  event_date TEXT NOT NULL,
  event_time TEXT NOT NULL,
  event_location TEXT NOT NULL,
  event_description TEXT,
  event_category TEXT,
  
  -- Personal Information
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  
  -- Attendance Details
  attendance_type TEXT NOT NULL CHECK (attendance_type IN ('individual', 'family')),
  family_members INTEGER DEFAULT 1,
  location_type TEXT NOT NULL CHECK (location_type IN ('tarkwa', 'away')),
  
  -- Accommodation Details
  accommodation_needed BOOLEAN DEFAULT FALSE,
  check_in_date DATE,
  check_out_date DATE,
  special_requests TEXT,
  
  -- Additional Information
  additional_notes TEXT,
  
  -- Metadata
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_event_registrations_event_title ON event_registrations(event_title);
CREATE INDEX IF NOT EXISTS idx_event_registrations_created_at ON event_registrations(created_at);
CREATE INDEX IF NOT EXISTS idx_event_registrations_phone ON event_registrations(phone);
CREATE INDEX IF NOT EXISTS idx_event_registrations_status ON event_registrations(status);

-- Enable RLS (Row Level Security)
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy for anyone to insert registrations
CREATE POLICY "Anyone can insert event registrations" ON event_registrations
  FOR INSERT WITH CHECK (true);

-- Create policy for authenticated users to read all registrations
CREATE POLICY "Authenticated users can view all registrations" ON event_registrations
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy for service role to manage registrations
CREATE POLICY "Service role can manage all registrations" ON event_registrations
  FOR ALL USING (auth.role() = 'service_role');

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_event_registrations_updated_at
  BEFORE UPDATE ON event_registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
