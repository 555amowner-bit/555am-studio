import { AboutPage } from "@/components/about-page";

export const metadata = {
  title: "About",
  description:
    "The story and thinking behind 5:55 AM, an independent web studio built by Charl.",
};

export default function AboutRoute() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}