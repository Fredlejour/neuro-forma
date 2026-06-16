import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import WhyHere from "@/components/WhyHere";
import NeuroChallenge from "@/components/NeuroChallenge";
import NeuroForma from "@/components/NeuroForma";
import NeuroPlace from "@/components/NeuroPlace";
import KeyFigures from "@/components/KeyFigures";
import VirtualTour from "@/components/VirtualTour";
import Location from "@/components/Location";
import WhySelling from "@/components/WhySelling";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import AgentContact from "@/components/AgentContact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyNow />
        <WhyHere />
        <NeuroChallenge />
        <NeuroForma />
        <NeuroPlace />
        <KeyFigures />
        <VirtualTour />
        <Location />
        <WhySelling />
        <FAQ />
        <FinalCTA />
        <ContactForm />
        <AgentContact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
