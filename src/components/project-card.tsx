import type { Project } from "@/lib/projects";
import { formatDate } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, FolderKanban } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
            <FolderKanban className="h-4 w-4" />
          </div>
          <Badge variant={project.status === "open" ? "default" : "secondary"}>
            {project.status === "open" ? "Berjalan" : "Selesai"}
          </Badge>
        </div>
        <CardTitle className="text-base leading-snug">{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          <span>{formatDate(project.startDate)}</span>
        </div>
      </CardContent>
    </Card>
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