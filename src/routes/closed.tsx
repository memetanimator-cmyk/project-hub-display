import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ProjectGrid } from "@/components/project-card";

export const Route = createFileRoute("/closed")({
  head: () => ({
    meta: [
      { title: "Closed Proyek — Project Tracker" },
      { name: "description", content: "Daftar proyek yang sudah selesai." },
      { property: "og:title", content: "Closed Proyek — Project Tracker" },
      { property: "og:description", content: "Daftar proyek yang sudah selesai." },
    ],
  }),
  component: ClosedPage,
});

function ClosedPage() {
  const items = projects
    .filter((p) => p.status === "closed")
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Closed Proyek</h1>
        <p className="text-sm text-muted-foreground">
          Proyek yang sudah selesai ({items.length}).
        </p>
      </div>
      <ProjectGrid items={items} />
    </div>
  );
}