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
        <CardContent className="text-sm">
          <dl className="divide-y">
            {rows.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="whitespace-pre-line font-medium sm:col-span-2">
                  {value || "-"}
                </dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}
