import { createFileRoute } from "@tanstack/react-router";
import { useProjects } from "@/lib/projects-store";
import { ProjectGrid } from "@/components/project-card";
import { ImportExcel } from "@/components/import-excel";
import logoAsset from "@/assets/logo-qs-infra1.png.asset.json";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
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
  const { q } = Route.useSearch();
  const projects = useProjects();
  const query = q.trim().toLowerCase();

  const time = (v: string) => {
    const t = new Date(v || "").getTime();
    return Number.isNaN(t) ? -Infinity : t;
  };
  const byNewest = (a: { periode: string }, b: { periode: string }) =>
    time(b.periode) - time(a.periode);

  const sorted = [...projects].sort(byNewest);

  const recent = query
    ? sorted
        .filter((p) =>
          Object.entries(p)
            .filter(([key]) => key !== "id")
            .some(([, v]) => typeof v === "string" && v.toLowerCase().includes(query)),
        )
        .sort(byNewest)
    : sorted.slice(0, 35);

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
      <ImportExcel />
      {query && (
        <p className="text-sm text-muted-foreground">
          Hasil pencarian "{q}" ({recent.length} proyek).
        </p>
      )}
      <ProjectGrid items={recent} />
      {query && recent.length === 0 && (
        <p className="text-sm text-muted-foreground">Proyek tidak ditemukan.</p>
      )}
    </div>
  );
}
