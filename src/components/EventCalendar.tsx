import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { churchInfo } from "@/lib/siteInfo";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  attendees?: string;
  isRecurring?: boolean;
  recurringPattern?: string;
}

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'list'>('month');

  // All events gathered from the site
  const allEvents: Event[] = [
    // Special Events
    {
      id: "harvest-thanksgiving",
      title: "Harvest Thanksgiving Service",
      date: "2025-12-15",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Join us as we thank God for His abundant blessings and provisions throughout the year. Special thanksgiving offering and potluck lunch to follow.",
      category: "Special Service",
      attendees: "500+"
    },
    {
      id: "cross-over-2025",
      title: "CROSS OVER 2025 with Pastor Desmond",
      date: "2025-12-31",
      time: "9:00 PM - 12:30 AM",
      location: "Newness Cathedral, Tarkwa",
      description: "Prophetic watch-night encounter ushering the church into 2025.",
      category: "Annual Event",
      attendees: "1000+"
    },
    {
      id: "watch-night-2026",
      title: "Watch Night Service",
      date: "2025-12-31",
      time: "9:00 PM - 12:30 AM",
      location: "Main Sanctuary",
      description: "Cross over into the New Year with praise, worship, and powerful prayers. Let's welcome 2026 with expectation and thanksgiving.",
      category: "Annual Event",
      attendees: "1000+"
    },
    {
      id: "youth-camp-2026",
      title: "Youth Camp 2026",
      date: "2026-01-10",
      time: "Full Week",
      location: "Akosombo Retreat Center",
      description: "A transformative week for young people with worship, teaching, team building, and fun activities. Theme: 'Unstoppable Generation'",
      category: "Youth Event",
      attendees: "200+"
    },
    {
      id: "marriage-seminar",
      title: "Marriage Enrichment Seminar",
      date: "2026-01-25",
      time: "9:00 AM - 4:00 PM",
      location: "Church Conference Hall",
      description: "Strengthen your marriage with biblical principles and practical tools. For all married couples and engaged partners.",
      category: "Seminar",
      attendees: "100+"
    },
    {
      id: "community-outreach",
      title: "Community Outreach",
      date: "2026-02-08",
      time: "8:00 AM - 2:00 PM",
      location: "Nima Community",
      description: "Join us in serving our community through medical care, food distribution, and sharing the Gospel with the less privileged.",
      category: "Outreach",
      attendees: "150+"
    },
    {
      id: "easter-convention",
      title: "Easter Convention",
      date: "2026-04-17",
      time: "Multiple Services",
      location: "Various Locations",
      description: "Four days of powerful worship, teaching, and celebration of Christ's resurrection. Special guest speakers from across Africa.",
      category: "Convention",
      attendees: "2000+"
    },
    // Regular Services
    {
      id: "sunday-service",
      title: "Sunday Celebration Service",
      date: "2025-12-01", // Will be duplicated for each Sunday
      time: "7:30 AM – 10:30 AM",
      location: "Tarkwa Headquarters",
      description: "Prophetic worship & Word encounter at the Tarkwa headquarters.",
      category: "Weekly Service",
      isRecurring: true,
      recurringPattern: "weekly"
    },
    {
      id: "wednesday-prayer",
      title: "Wednesday Word & Prayer",
      date: "2025-12-03", // Will be duplicated for each Wednesday
      time: "7:00 PM – 9:00 PM",
      location: "Tarkwa Headquarters",
      description: "Midweek training with fasting, prayer, and the Word.",
      category: "Weekly Service",
      isRecurring: true,
      recurringPattern: "weekly"
    },
    // Monthly Events
    {
      id: "first-friday-vigil",
      title: "First Friday Prayer Vigil",
      date: "2025-12-05", // Will be calculated dynamically
      time: "11:00 PM - 3:00 AM",
      location: "Main Sanctuary",
      description: "Power-packed night of intercession and spiritual warfare",
      category: "Monthly Event",
      isRecurring: true,
      recurringPattern: "monthly-first-friday"
    },
    {
      id: "womens-prayer",
      title: "Women's Prayer Meeting",
      date: "2025-12-02", // Will be duplicated for each Tuesday
      time: "10:00 AM",
      location: "Church Hall",
      description: "Sisters gathering for prayer, worship, and fellowship",
      category: "Weekly Event",
      isRecurring: true,
      recurringPattern: "weekly"
    },
    {
      id: "mens-prayer",
      title: "Men's Prayer Breakfast",
      date: "2025-12-04", // Will be duplicated for each Thursday
      time: "6:00 AM",
      location: "Church Hall",
      description: "Building kingdom men through prayer and the Word",
      category: "Weekly Event",
      isRecurring: true,
      recurringPattern: "weekly"
    },
    {
      id: "youth-impact",
      title: "Youth Impact Night",
      date: "2025-12-05", // Will be duplicated for each Friday
      time: "7:00 PM",
      location: "Youth Center",
      description: "Dynamic worship and relevant teaching for young people",
      category: "Weekly Event",
      isRecurring: true,
      recurringPattern: "weekly"
    }
  ];

  // Generate recurring events for the current month
  const generateRecurringEvents = (baseEvents: Event[], year: number, month: number): Event[] => {
    const events: Event[] = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    baseEvents.forEach(event => {
      if (!event.isRecurring) {
        events.push(event);
        return;
      }

      const eventDate = new Date(event.date);
      
      if (event.recurringPattern === "weekly") {
        // Generate weekly events
        for (let day = 1; day <= daysInMonth; day++) {
          const currentDate = new Date(year, month, day);
          const dayOfWeek = currentDate.getDay();
          
          // Match the day of week (0 = Sunday, 1 = Monday, etc.)
          if (eventDate.getDay() === dayOfWeek) {
            events.push({
              ...event,
              id: `${event.id}-${year}-${month}-${day}`,
              date: `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
            });
          }
        }
      } else if (event.recurringPattern === "monthly-first-friday") {
        // Find first Friday of the month
        for (let day = 1; day <= 7; day++) {
          const currentDate = new Date(year, month, day);
          if (currentDate.getDay() === 5) { // Friday
            events.push({
              ...event,
              id: `${event.id}-${year}-${month}`,
              date: `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
            });
            break;
          }
        }
      }
    });

    return events;
  };

  const eventsForMonth = generateRecurringEvents(allEvents, currentDate.getFullYear(), currentDate.getMonth());

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Get first day of month
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return eventsForMonth.filter(event => event.date === dateStr);
  };

  // Navigate months
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  // Render calendar grid
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const events = getEventsForDate(date);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-200 p-1 cursor-pointer hover:bg-gray-50 transition-colors ${
            isSelected ? 'bg-blue-50 border-blue-500' : ''
          } ${isToday ? 'bg-yellow-50' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          <div className="text-sm font-semibold mb-1">{day}</div>
          <div className="space-y-1">
            {events.slice(0, 2).map(event => (
              <div
                key={event.id}
                className={`text-xs p-1 rounded truncate ${
                  event.category === 'Special Service' ? 'bg-red-100 text-red-700' :
                  event.category === 'Annual Event' ? 'bg-purple-100 text-purple-700' :
                  event.category === 'Youth Event' ? 'bg-blue-100 text-blue-700' :
                  event.category === 'Weekly Service' ? 'bg-green-100 text-green-700' :
                  'bg-gray-100 text-gray-700'
                }`}
              >
                {event.title}
              </div>
            ))}
            {events.length > 2 && (
              <div className="text-xs text-gray-500">+{events.length - 2} more</div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  // Render selected date events
  const renderSelectedDateEvents = () => {
    if (!selectedDate) return null;

    const events = getEventsForDate(selectedDate);
    if (events.length === 0) {
      return (
        <Card>
          <CardContent className="p-6 text-center text-gray-500">
            No events scheduled for this date
          </CardContent>
        </Card>
      );
    }

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          Events for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </h3>
        {events.map(event => (
          <Card key={event.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-primary">{event.title}</h4>
                <Badge variant="secondary">{event.category}</Badge>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                {event.attendees && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees}</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-700 mt-3">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">Church Calendar</h2>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'month' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('month')}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Month View
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <Tag className="w-4 h-4 mr-2" />
            List View
          </Button>
        </div>
      </div>

      {viewMode === 'month' ? (
        <>
          {/* Month Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => navigateMonth('prev')}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <h3 className="text-xl font-semibold">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            <Button
              variant="outline"
              onClick={() => navigateMonth('next')}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-0 border border-gray-300">
            {/* Day headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="h-10 bg-gray-100 border border-gray-300 flex items-center justify-center font-semibold text-sm">
                {day}
              </div>
            ))}
            {/* Calendar days */}
            {renderCalendar()}
          </div>

          {/* Selected date events */}
          {selectedDate && (
            <div className="mt-6">
              {renderSelectedDateEvents()}
            </div>
          )}
        </>
      ) : (
        /* List View */
        <div className="space-y-4">
          {eventsForMonth
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map(event => (
              <Card key={event.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-primary">{event.title}</h4>
                      <p className="text-sm text-gray-600">
                        {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mt-3">{event.description}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      )}

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Event Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 rounded"></div>
              <span className="text-sm">Special Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-100 rounded"></div>
              <span className="text-sm">Annual Event</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-100 rounded"></div>
              <span className="text-sm">Youth Event</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 rounded"></div>
              <span className="text-sm">Weekly Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-100 rounded"></div>
              <span className="text-sm">Other Events</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCalendar;
