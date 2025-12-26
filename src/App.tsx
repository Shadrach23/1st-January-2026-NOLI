import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { RequireAuth } from "@/components/RequireAuth";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import MinistriesPage from "./pages/MinistriesPage";
import EventsPage from "./pages/EventsPage";
import EventRegistrationPage from "./pages/EventRegistrationPage";
import GalleryPage from "./pages/GalleryPage";
import CalendarPage from "./pages/CalendarPage";
import GivePage from "./pages/GivePage";
import ContactPage from "./pages/ContactPage";
import StaffLoginPage from "./pages/StaffLoginPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/ministries" element={<MinistriesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/register-event" element={<EventRegistrationPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/give" element={<GivePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/staff-login" element={<StaffLoginPage />} />
              <Route
                path="/admin"
                element={
                  <RequireAuth>
                    <AdminPage />
                  </RequireAuth>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
