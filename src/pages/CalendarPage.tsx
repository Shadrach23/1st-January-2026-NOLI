import EventCalendar from "@/components/EventCalendar";

const CalendarPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default CalendarPage;
