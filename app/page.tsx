import HeroSection          from '@/components/HeroSection';
import WhyUsSection         from '@/components/WhyUsSection';
import GateauxGallery       from '@/components/GateauxGallery';
import SpecialitesPeru      from '@/components/SpecialitesPeru';
import NotreHistoireSection from '@/components/NotreHistoireSection';
import CommanderSection     from '@/components/CommanderSection';
import TestimonialsSection  from '@/components/TestimonialsSection';
import InstagramSection     from '@/components/InstagramSection';
import CTAFinalSection      from '@/components/CTAFinalSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <GateauxGallery />
      <SpecialitesPeru />
      <NotreHistoireSection />
      <CommanderSection />
      <TestimonialsSection />
      <InstagramSection />
      <CTAFinalSection />
    </>
  );
}
