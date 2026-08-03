import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";
import { parseTenderWorkbook } from "@/lib/tender-xlsx";
import { setImportedProjects, useImportMeta } from "@/lib/projects-store";

export function ImportExcel() {
  const inputRef = useRef<HTMLInputElement>(null);
  const meta = useImportMeta();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleFile(file: File) {
    setBusy(true);
    setError("");
    try {
      const items = await parseTenderWorkbook(file);
      setImportedProjects(items, {
        fileName: file.name,
        importedAt: new Date().toISOString(),
        count: items.length,
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gagal membaca file Excel.");
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="rounded-lg border bg-card/90 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm">
          <p className="font-medium">Import data Excel (List Tender)</p>
          <p className="text-muted-foreground">
            {meta
              ? `${meta.fileName} — ${meta.count} proyek, diimpor ${new Date(meta.importedAt).toLocaleString("id-ID")}`
              : "Belum ada file diimpor. Data yang tampil adalah data bawaan."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="file"
            accept=".xlsx,.xls"
            className="sr-only"
            aria-label="Pilih file Excel"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void handleFile(file);
            }}
          />
          <Button size="sm" disabled={busy} onClick={() => inputRef.current?.click()}>
            <FileUp className="h-4 w-4" />
            {busy ? "Memproses..." : "Pilih file Excel"}
          </Button>
        </div>
      </div>
      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
    </div>
  );
}
