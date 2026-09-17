import { Hero } from "@/components/hero";
import { HowWeWork } from "@/components/how-we-work";
import { SelectedWork } from "@/components/selected-work";
import { ServicesPricing } from "@/components/services-pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <HowWeWork />
      <ServicesPricing />
    </>
  );
}
