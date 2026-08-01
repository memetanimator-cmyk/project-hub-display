import type { Project } from "./projects";

const HEADER_MAP: Record<string, keyof Project> = {
  "KEY STATUS": "keyStatus",
  "NAMA PROYEK": "name",
  OPERASI: "operasi",
  KAM: "kam",
  KTT: "ktt",
  OWNER: "owner",
  "NILAI OK (M) HPS": "nilaiOkHps",
  STATUS: "statusTender",
  "SUMBER DANA": "sumberDana",
  PAYMENT: "payment",
  "JENIS KONTRAK": "jenisKontrak",
  PERIODE: "periode",
  "PERIODE TENDER": "periodeTender",
  "PEMASUKAN HARGA": "pemasukanHarga",
  "KOORDINATOR QS": "koordinatorQs",
  "KOORDINATOR ACTIVE / CLOSE": "koordinatorStatus",
  "STATUS SAAT INI": "statusSaatIni",
};

function norm(v: unknown) {
  return String(v ?? "").replace(/\s+/g, " ").trim();
}

function toText(v: unknown): string {
  if (v == null) return "";
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return norm(v);
}

/** Parse an uploaded "List Tender" .xlsx file into Project rows (runs fully in the browser). */
export async function parseTenderWorkbook(file: File): Promise<Project[]> {
  const XLSX = await import("xlsx");
  const buffer = await file.arrayBuffer();
  const wb = XLSX.read(buffer, { type: "array", cellDates: true });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  if (!sheet) throw new Error("File Excel tidak memiliki sheet.");

  const grid = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
    header: 1,
    blankrows: false,
    defval: "",
  });

  const headerIndex = grid.findIndex((row) =>
    row.some((cell) => norm(cell).toUpperCase() === "NAMA PROYEK"),
  );
  if (headerIndex === -1) {
    throw new Error('Header "NAMA PROYEK" tidak ditemukan pada file ini.');
  }

  const headers = grid[headerIndex].map((cell) => norm(cell).toUpperCase());
  const columns = headers.map((h) => HEADER_MAP[h]);

  const projects: Project[] = [];
  for (let r = headerIndex + 1; r < grid.length; r++) {
    const row = grid[r];
    const record: Record<string, string> = {};
    columns.forEach((key, c) => {
      if (key) record[key] = toText(row[c]);
    });
    if (!record.name) continue;
    // Baris pemisah (mis. nama koordinator) tidak punya data tender.
    const hasDetail = [
      record.operasi,
      record.ktt,
      record.nilaiOkHps,
      record.periode,
      record.statusTender,
      record.owner,
      record.kam,
    ].some((v) => v);
    if (!hasDetail) continue;

    const koordinatorStatus = record.koordinatorStatus || "";
    projects.push({
      id: String(projects.length + 1),
      keyStatus: record.keyStatus || "",
      name: record.name,
      operasi: record.operasi || "",
      kam: record.kam || "",
      ktt: record.ktt || "",
      owner: record.owner || "",
      nilaiOkHps: record.nilaiOkHps || "",
      statusTender: record.statusTender || "",
      sumberDana: record.sumberDana || "",
      payment: record.payment || "",
      jenisKontrak: record.jenisKontrak || "",
      periode: record.periode || "",
      periodeTender: record.periodeTender || "",
      pemasukanHarga: record.pemasukanHarga || "",
      koordinatorQs: record.koordinatorQs || "",
      koordinatorStatus,
      statusSaatIni: record.statusSaatIni || "",
      status: /close/i.test(koordinatorStatus) ? "closed" : "open",
    });
  }

  if (projects.length === 0) throw new Error("Tidak ada baris proyek yang terbaca.");
  return projects;
}
