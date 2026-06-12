import PairingHeroVariant from "@/components/Sections/pairing/BottomHero";
import PairingHero from "@/components/Sections/pairing/PairingHero";
import PairingSection from "@/components/Sections/pairing/PairingSection";
import SmallNav from "@/components/Sections/pairing/SmallNav";

export default function Page() {
  return (
    <main className=" bg-primary-50">
      <SmallNav />
      <PairingHero
        title="Discover the Art of Pairing"
        subtitle="Elevate every Velarro cigar with perfectly matched flavors, crafted for balance, depth, and experience."
        backgroundImage="/images/sample_hero.png"
      />
      <PairingSection />
      <PairingHeroVariant
        title="Discover Every "
        highlight="Expression"
        subtitle="From the grandest Salomones to the lightest lancero explore the full breadth of Velarro’s thirty cigar collection."
        backgroundImage="/images/accessorieshome2.png"
      />

    </main>
  );
}
