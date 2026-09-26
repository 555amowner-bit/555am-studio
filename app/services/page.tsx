import { ServicesPage } from "@/components/services-page";

export const metadata = {
  title: "Web Design Services",
  description:
    "Explore web design and development services by 5:55 AM for local businesses, from focused starter websites to custom projects and ongoing website care.",
  openGraph: {
    title: "Web Design Services | 5:55 AM",
    description:
      "Explore web design and development services by 5:55 AM for local businesses, from focused starter websites to custom projects and ongoing website care.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Web Design Services | 5:55 AM",
    description:
      "Explore web design and development services by 5:55 AM for local businesses, from focused starter websites to custom projects and ongoing website care.",
  },
};

export default function ServicesRoute() {
  return (
    <main>
      <ServicesPage />
    </main>
  );
}