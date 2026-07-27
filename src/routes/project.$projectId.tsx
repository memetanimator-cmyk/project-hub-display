import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, formatPeriode, formatNilai } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CalendarDays, FileText, FolderKanban, Layers, Wallet } from "lucide-react";

export const Route = createFileRoute("/project/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Proyek tidak ditemukan — Project Tracker" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.project.name} — Project Tracker`;
    const description = `Detail tender ${loaderData.project.name}, periode ${formatPeriode(loaderData.project.periode)}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <div className="space-y-6">
      <Link
        to={project.status === "open" ? "/open" : "/closed"}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke {project.status === "open" ? "Open" : "Closed"} Proyek
      </Link>

      <Card className="max-w-2xl">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <FolderKanban className="h-5 w-5" />
            </div>
            <Badge variant={project.status === "open" ? "default" : "secondary"}>
              {project.status === "open" ? "Berjalan" : "Selesai"}
            </Badge>
          </div>
          <CardTitle className="text-2xl">{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Layers className="h-4 w-4" />
            <span>Operasi: {project.operasi || "-"}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <FileText className="h-4 w-4" />
            <span>KTT: {project.ktt || "-"}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Wallet className="h-4 w-4" />
            <span>Nilai OK (M) HPS: {formatNilai(project.nilaiOkHps)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>Periode: {formatPeriode(project.periode)}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t pt-4">
            <div>
              <p className="text-muted-foreground">ID Proyek</p>
              <p className="font-medium">{project.id}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Status</p>
              <p className="font-medium">
                {project.status === "open" ? "Sedang berjalan" : "Sudah selesai"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
