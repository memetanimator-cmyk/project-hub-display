import type { Project } from "@/lib/projects";
import { formatPeriode, formatNilai } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, FileText, FolderKanban, Layers, Wallet } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/project/$projectId"
      params={{ projectId: project.id }}
      className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="group h-full cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
            <FolderKanban className="h-4 w-4" />
          </div>
          <Badge variant={project.status === "open" ? "default" : "secondary"}>
            {project.status === "open" ? "Active" : "Close"}
          </Badge>
        </div>
        <CardTitle className="text-base leading-snug">
          {project.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 shrink-0" />
          <span>Operasi: {project.operasi || "-"}</span>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 shrink-0" />
          <span>KTT: {project.ktt || "-"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Wallet className="h-4 w-4 shrink-0" />
          <span>Nilai OK (M) HPS: {formatNilai(project.nilaiOkHps)}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 shrink-0" />
          <span>Periode: {formatPeriode(project.periode)}</span>
        </div>
      </CardContent>
      </Card>
    </Link>
  );
}

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}