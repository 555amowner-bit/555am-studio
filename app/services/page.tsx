import { ServicesPage } from "@/components/services-page";

export const metadata = {
  title: "Website UI Design Services",
  description:
    "Explore website UI design services by 5:55 AM for local businesses, from focused landing page layouts to custom interface projects and design handoff.",
  openGraph: {
    title: "Website UI Design Services | 5:55 AM",
    description:
      "Explore website UI design services by 5:55 AM for local businesses, from focused landing page layouts to custom interface projects and design handoff.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Website UI Design Services | 5:55 AM",
    description:
      "Explore website UI design services by 5:55 AM for local businesses, from focused landing page layouts to custom interface projects and design handoff.",
  },
};

export default function ServicesRoute() {
  return (
    <main>
      <ServicesPage />
    </main>
  );
}
