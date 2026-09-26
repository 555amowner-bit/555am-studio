import { AboutPage } from "@/components/about-page";

export const metadata = {
  title: "About 5:55 AM",
  description:
    "Learn about 5:55 AM, the thinking behind the studio, and Charl's approach to building simple, purposeful websites.",
  openGraph: {
    title: "About 5:55 AM | Independent Web Studio",
    description:
      "Learn about 5:55 AM, the thinking behind the studio, and Charl's approach to building simple, purposeful websites.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About 5:55 AM | Independent Web Studio",
    description:
      "Learn about 5:55 AM, the thinking behind the studio, and Charl's approach to building simple, purposeful websites.",
  },
};

export default function AboutRoute() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}