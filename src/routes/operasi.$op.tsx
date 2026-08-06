import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { formatPeriode, formatNilai } from "@/lib/projects";
import { useProjects } from "@/lib/projects-store";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const labels: Record<string, string> = {
  "1": "Operasi 1",
  "2": "Operasi 2",
};

export const Route = createFileRoute("/operasi/$op")({
  loader: ({ params }) => {
    const label = labels[params.op];
    if (!label) throw notFound();
    return { label };
  },
  head: ({ loaderData }) => {
    const label = loaderData?.label ?? "Operasi";
    const description = `Daftar nama proyek tender pada ${label}.`;
    return {
      meta: [
        { title: `${label} — Daftar Proyek Tender` },
        { name: "description", content: description },
        { property: "og:title", content: `${label} — Daftar Proyek Tender` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: OperasiPage,
});

function OperasiPage() {
  const { label } = Route.useLoaderData();
  const projects = useProjects();
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => p.operasi === label)
      .filter((p) =>
        q
          ? Object.entries(p)
              .filter(([key]) => key !== "id")
              .some(
                ([, v]) => typeof v === "string" && v.toLowerCase().includes(q),
              )
          : true,
      )
      .sort(
        (a, b) =>
          new Date(b.periode || 0).getTime() - new Date(a.periode || 0).getTime(),
      );
  }, [label, query, projects]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{label}</h1>
        <p className="text-sm text-muted-foreground">
          Daftar nama proyek pada {label} ({items.length}).
        </p>
      </div>

      <div className="relative max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari nama proyek..."
          aria-label="Cari nama proyek"
          className="pl-9"
        />
      </div>

      <div className="overflow-hidden rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">No</TableHead>
              <TableHead>Nama Proyek</TableHead>
              <TableHead>KTT</TableHead>
              <TableHead>Nilai OK (M) HPS</TableHead>
              <TableHead>Periode</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((p, i) => (
              <TableRow key={p.id}>
                <TableCell className="text-muted-foreground">{i + 1}</TableCell>
                <TableCell className="font-medium">
                  <Link
                    to="/project/$projectId"
                    params={{ projectId: p.id }}
                    className="hover:underline"
                  >
                    {p.name}
                  </Link>
                </TableCell>
                <TableCell>{p.ktt || "-"}</TableCell>
                <TableCell>{formatNilai(p.nilaiOkHps) || "-"}</TableCell>
                <TableCell>{formatPeriode(p.periode) || "-"}</TableCell>
              </TableRow>
            ))}
            {items.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  {query ? "Proyek tidak ditemukan." : "Tidak ada proyek."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}