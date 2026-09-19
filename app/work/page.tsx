import { WorkIndex } from "@/components/work-index";

export const metadata = {
  title: "Work",
  description:
    "Selected concept work by 5:55 AM, an independent web studio focused on thoughtful digital experiences for local businesses.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkIndex />
    </main>
  );
}