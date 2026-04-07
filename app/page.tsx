import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnimatedStats from "@/components/AnimatedStats";
import Heritage from "@/components/Heritage";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import PhotoGallery from "@/components/PhotoGallery";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import BookingForm from "@/components/BookingForm";
import OpeningHours from "@/components/OpeningHours";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <AnimatedStats />
        <Heritage />
        <Services />
        <BeforeAfter />
        <PhotoGallery />
        <Testimonials />
        <Team />
        <BookingForm />
        <OpeningHours />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
