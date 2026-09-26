import { AuraCaseStudy } from "@/components/aura-case-study";

export const metadata = {
  title: "Aura Skin | Concept",
  description:
    "Explore the Aura Skin concept by 5:55 AM, a calm, image-led web direction for a considered skincare studio focused on space, rhythm, and thoughtful presentation.",
  openGraph: {
    title: "Aura Skin | Concept | 5:55 AM",
    description:
      "Explore the Aura Skin concept by 5:55 AM, a calm, image-led web direction for a considered skincare studio focused on space, rhythm, and thoughtful presentation.",
    url: "/work/aura-skin",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aura Skin | Concept | 5:55 AM",
    description:
      "Explore the Aura Skin concept by 5:55 AM, a calm, image-led web direction for a considered skincare studio focused on space, rhythm, and thoughtful presentation.",
  },
};

export default function AuraSkinPage() {
  return (
    <main>
      <AuraCaseStudy />
    </main>
  );
}