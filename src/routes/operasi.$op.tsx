import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, formatPeriode, formatNilai } from "@/lib/projects";
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
  const items = projects
    .filter((p) => p.operasi === label)
    .sort((a, b) => new Date(b.periode || 0).getTime() - new Date(a.periode || 0).getTime());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{label}</h1>
        <p className="text-sm text-muted-foreground">
          Daftar nama proyek pada {label} ({items.length}).
        </p>
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
                  Tidak ada proyek.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}