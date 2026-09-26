import { MaisonCaseStudy } from "@/components/maison-case-study";

export const metadata = {
  title: "Maison Hair Studio | Concept",
  description:
    "Explore the Maison Hair Studio concept by 5:55 AM, an editorial web direction for a contemporary hair studio focused on atmosphere, clarity, and a slower visual rhythm.",
  openGraph: {
    title: "Maison Hair Studio | Concept | 5:55 AM",
    description:
      "Explore the Maison Hair Studio concept by 5:55 AM, an editorial web direction for a contemporary hair studio focused on atmosphere, clarity, and a slower visual rhythm.",
    url: "/work/maison-hair-studio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Maison Hair Studio | Concept | 5:55 AM",
    description:
      "Explore the Maison Hair Studio concept by 5:55 AM, an editorial web direction for a contemporary hair studio focused on atmosphere, clarity, and a slower visual rhythm.",
  },
};

export default function MaisonHairStudioPage() {
  return (
    <main>
      <MaisonCaseStudy />
    </main>
  );
}