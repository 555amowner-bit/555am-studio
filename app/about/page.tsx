import { AboutPage } from "@/components/about-page";

export const metadata = {
  title: "About 5:55 AM",
  description:
    "Learn about 5:55 AM, the thinking behind the studio, and Charl's approach to building simple, purposeful websites.",
};

export default function AboutRoute() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}