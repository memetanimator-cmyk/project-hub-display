import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ProjectGrid } from "@/components/project-card";

export const Route = createFileRoute("/open")({
  head: () => ({
    meta: [
      { title: "Open Proyek — Project Tracker" },
      { name: "description", content: "Daftar proyek yang sedang berjalan." },
      { property: "og:title", content: "Open Proyek — Project Tracker" },
      { property: "og:description", content: "Daftar proyek yang sedang berjalan." },
    ],
  }),
  component: OpenPage,
});

function OpenPage() {
  const items = projects
    .filter((p) => p.status === "open")
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Open Proyek</h1>
        <p className="text-sm text-muted-foreground">
          Proyek yang sedang berjalan ({items.length}).
        </p>
      </div>
      <ProjectGrid items={items} />
    </div>
  );
}