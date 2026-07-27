import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ProjectGrid } from "@/components/project-card";
import logoAsset from "@/assets/logo-qs-infra1.png.asset.json";

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
    .sort((a, b) => new Date(b.periode || 0).getTime() - new Date(a.periode || 0).getTime())
    .slice(0, 35);

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <img
          src={logoAsset.url}
          alt="Logo QS & Tech Support Infra 1 Subdivision"
          width={1920}
          height={620}
          className="h-20 w-auto rounded-lg border border-border bg-card/90 px-8 py-3 shadow-sm"
        />
      </div>
      <h1 className="sr-only">Dashboard Proyek</h1>
      <ProjectGrid items={recent} />
    </div>
  );
}
