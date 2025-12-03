import { supabase } from './supabaseClient';

export async function setupEventRegistrationsTable() {
  try {
    // Create the event_registrations table using SQL
    const { error } = await supabase.rpc('exec_sql', {
      sql: `
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

        -- Create indexes
        CREATE INDEX IF NOT EXISTS idx_event_registrations_event_title ON event_registrations(event_title);
        CREATE INDEX IF NOT EXISTS idx_event_registrations_created_at ON event_registrations(created_at);
        CREATE INDEX IF NOT EXISTS idx_event_registrations_phone ON event_registrations(phone);
        CREATE INDEX IF NOT EXISTS idx_event_registrations_status ON event_registrations(status);

        -- Enable RLS
        ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

        -- Drop existing policies if they exist
        DROP POLICY IF EXISTS "Anyone can insert event registrations" ON event_registrations;
        DROP POLICY IF EXISTS "Authenticated users can view all registrations" ON event_registrations;
        DROP POLICY IF EXISTS "Service role can manage all registrations" ON event_registrations;

        -- Create policies
        CREATE POLICY "Anyone can insert event registrations" ON event_registrations
          FOR INSERT WITH CHECK (true);

        CREATE POLICY "Authenticated users can view all registrations" ON event_registrations
          FOR SELECT USING (auth.role() = 'authenticated');

        CREATE POLICY "Service role can manage all registrations" ON event_registrations
          FOR ALL USING (auth.role() = 'service_role');

        -- Create function for updated_at trigger
        CREATE OR REPLACE FUNCTION update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
          NEW.updated_at = NOW();
          RETURN NEW;
        END;
        $$ language 'plpgsql';

        -- Create trigger
        DROP TRIGGER IF EXISTS update_event_registrations_updated_at ON event_registrations;
        CREATE TRIGGER update_event_registrations_updated_at
          BEFORE UPDATE ON event_registrations
          FOR EACH ROW
          EXECUTE FUNCTION update_updated_at_column();
      `
    });

    if (error) {
      console.error('Error creating table:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Setup error:', error);
    return { success: false, error: (error as Error).message };
  }
}

// Alternative approach: Create table using direct SQL execution
export async function createEventRegistrationsTableDirect() {
  try {
    // First try to create the table using the REST API approach
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS event_registrations (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        event_title TEXT NOT NULL,
        event_date TEXT NOT NULL,
        event_time TEXT NOT NULL,
        event_location TEXT NOT NULL,
        event_description TEXT,
        event_category TEXT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        attendance_type TEXT NOT NULL CHECK (attendance_type IN ('individual', 'family')),
        family_members INTEGER DEFAULT 1,
        location_type TEXT NOT NULL CHECK (location_type IN ('tarkwa', 'away')),
        accommodation_needed BOOLEAN DEFAULT FALSE,
        check_in_date DATE,
        check_out_date DATE,
        special_requests TEXT,
        additional_notes TEXT,
        status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `;

    // Use the Supabase SQL editor approach
    const { data, error } = await supabase
      .from('event_registrations')
      .select('*')
      .limit(1);

    // If table doesn't exist, the error will guide us
    if (error && error.code === 'PGRST116') {
      // Table doesn't exist, we need to create it manually
      console.log('Table does not exist. Please create it manually in Supabase dashboard.');
      return { 
        success: false, 
        error: 'Table does not exist. Please create it manually.',
        instructions: `
          Go to your Supabase dashboard: https://hefeejczxfuqlkxxmscu.supabase.co
          1. Click on "SQL Editor" in the sidebar
          2. Click "New query"
          3. Copy and paste the following SQL:
          
          CREATE TABLE IF NOT EXISTS event_registrations (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            event_title TEXT NOT NULL,
            event_date TEXT NOT NULL,
            event_time TEXT NOT NULL,
            event_location TEXT NOT NULL,
            event_description TEXT,
            event_category TEXT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT,
            attendance_type TEXT NOT NULL CHECK (attendance_type IN ('individual', 'family')),
            family_members INTEGER DEFAULT 1,
            location_type TEXT NOT NULL CHECK (location_type IN ('tarkwa', 'away')),
            accommodation_needed BOOLEAN DEFAULT FALSE,
            check_in_date DATE,
            check_out_date DATE,
            special_requests TEXT,
            additional_notes TEXT,
            status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
          
          -- Enable RLS
          ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
          
          -- Allow anyone to insert
          CREATE POLICY "Anyone can insert event registrations" ON event_registrations
            FOR INSERT WITH CHECK (true);
          
          -- Allow authenticated users to read
          CREATE POLICY "Authenticated users can view all registrations" ON event_registrations
            FOR SELECT USING (auth.role() = 'authenticated');
          
          4. Click "Run" to execute
        `
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Direct setup error:', error);
    return { success: false, error: (error as Error).message };
  }
}
