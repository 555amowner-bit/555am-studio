import { NoirCaseStudy } from "@/components/noir-case-study";

export const metadata = {
  title: "Noir Barber | Concept",
  description:
    "Explore the Noir Barber concept by 5:55 AM, a structured monochrome web direction for a modern barber focused on strong typography and a focused service experience.",
  openGraph: {
    title: "Noir Barber | Concept | 5:55 AM",
    description:
      "Explore the Noir Barber concept by 5:55 AM, a structured monochrome web direction for a modern barber focused on strong typography and a focused service experience.",
    url: "/work/noir-barber",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Noir Barber | Concept | 5:55 AM",
    description:
      "Explore the Noir Barber concept by 5:55 AM, a structured monochrome web direction for a modern barber focused on strong typography and a focused service experience.",
  },
};

export default function NoirBarberPage() {
  return (
    <main>
      <NoirCaseStudy />
    </main>
  );
}