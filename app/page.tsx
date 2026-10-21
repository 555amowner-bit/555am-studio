import { AboutIntro } from "@/components/about-intro";
import { FinalCta } from "@/components/final-cta";
import { HowWeWork } from "@/components/how-we-work";
import { SelectedWork } from "@/components/selected-work";
import { ServicesPricing } from "@/components/services-pricing";
import { ObsidianHero } from "@/components/obsidian-hero";

export default function Home() {
  return (
    <main>
      <ObsidianHero />
      <SelectedWork />
      <HowWeWork />
      <ServicesPricing />
      <AboutIntro />
      <FinalCta />
    </main>
  );
}