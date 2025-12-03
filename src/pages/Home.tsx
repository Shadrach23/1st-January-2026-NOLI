import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import VideoGallery from "@/components/VideoGallery";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import QuickLinks from "@/components/QuickLinks";

const Home = () => {
  return (
    <>
      <Hero />
      <VideoGallery />
      <FeaturedSection />
      <TestimonialsCarousel />
      <QuickLinks />
    </>
  );
};

export default Home;
