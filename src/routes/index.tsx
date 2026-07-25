import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ProjectGrid } from "@/components/project-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Project Tracker" },
      { name: "description", content: "Lihat proyek terbaru berdasarkan tanggal mulai." },
      { property: "og:title", content: "Dashboard — Project Tracker" },
      { property: "og:description", content: "Lihat proyek terbaru berdasarkan tanggal mulai." },
    ],
  }),
  component: Index,
});

function Index() {
  const recent = [...projects]
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .slice(0, 35);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Proyek terbaru berdasarkan tanggal mulai.
        </p>
      </div>
      <ProjectGrid items={recent} />
    </div>
  );
}
