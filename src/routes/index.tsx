import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ProjectGrid } from "@/components/project-card";
import logo from "@/assets/logo-project-tracker.png";

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
      <div className="flex justify-center">
        <img
          src={logo}
          alt="Logo Project Tracker"
          width={1152}
          height={576}
          className="h-20 w-auto rounded-lg border border-border bg-card/80 px-6 py-2 shadow-sm"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Proyek terbaru berdasarkan tanggal mulai.
        </p>
      </div>
      <ProjectGrid items={recent} />
    </div>
  );
}
