import { ServicesPage } from "@/components/services-page";

export const metadata = {
  title: "Services",
  description:
    "Web design and development services from 5:55 AM for local businesses.",
};

export default function ServicesRoute() {
  return (
    <main>
      <ServicesPage />
    </main>
  );
}