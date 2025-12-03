# Database Setup Instructions

The event registration table needs to be created manually in your Supabase dashboard.

## Steps to Create the Table:

1. **Open your Supabase Dashboard**
   - Go to: https://hefeejczxfuqlkxxmscu.supabase.co
   - Sign in with your credentials

2. **Navigate to SQL Editor**
   - In the left sidebar, click on "SQL Editor"
   - Click "New query" button

3. **Execute the SQL**
   - Copy the entire SQL code below
   - Paste it into the SQL editor
   - Click "Run" to execute

## SQL Code to Execute:

```sql
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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_event_registrations_event_title ON event_registrations(event_title);
CREATE INDEX IF NOT EXISTS idx_event_registrations_created_at ON event_registrations(created_at);
CREATE INDEX IF NOT EXISTS idx_event_registrations_phone ON event_registrations(phone);
CREATE INDEX IF NOT EXISTS idx_event_registrations_status ON event_registrations(status);

-- Enable Row Level Security (RLS)
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can insert event registrations" ON event_registrations;
DROP POLICY IF EXISTS "Authenticated users can view all registrations" ON event_registrations;
DROP POLICY IF EXISTS "Service role can manage all registrations" ON event_registrations;

-- Create policies for access control
CREATE POLICY "Anyone can insert event registrations" ON event_registrations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can view all registrations" ON event_registrations
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Service role can manage all registrations" ON event_registrations
  FOR ALL USING (auth.role() = 'service_role');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_event_registrations_updated_at ON event_registrations;
CREATE TRIGGER update_event_registrations_updated_at
  BEFORE UPDATE ON event_registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

4. **Verify Table Creation**
   - After running the SQL, go to "Table Editor" in the sidebar
   - You should see "event_registrations" in the list of tables
   - Click on it to verify the structure

## Once Complete:

After creating the table, your event registration system will work properly:
- Registrations will be saved to the database
- Email notifications will be sent to both the registrant and your church email
- You can view all registrations in the Supabase dashboard

## Test the System:

1. Go to your website's events page
2. Click "Register Now" on any event
3. Fill out the registration form
4. Submit to test both database storage and email notifications

If you encounter any issues, check the browser console for error messages.
