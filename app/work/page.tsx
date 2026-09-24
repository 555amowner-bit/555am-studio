import { WorkIndex } from "@/components/work-index";

export const metadata = {
  title: "Selected Work",
  description:
    "Explore concept web design work by 5:55 AM, an independent web studio creating thoughtful digital experiences for local businesses.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkIndex />
    </main>
  );
}