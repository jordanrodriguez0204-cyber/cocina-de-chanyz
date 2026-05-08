import HeroSection      from '@/components/HeroSection';
import GateauxGallery   from '@/components/GateauxGallery';
import SpecialitesPeru  from '@/components/SpecialitesPeru';
import CommanderSection from '@/components/CommanderSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GateauxGallery />
      <SpecialitesPeru />
      <CommanderSection />
    </>
  );
}
