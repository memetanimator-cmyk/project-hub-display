export type Project = {
  id: string;
  name: string;
  operasi: string;
  ktt: string;
  nilaiOkHps: string;
  periode: string; // ISO date or ""
  status: "open" | "closed";
};

export const projects: Project[] = [
  { id: "1", name: "Pengendali Banjir Kali Kedurus di Kota Surabaya", operasi: "Operasi 1", ktt: "Ganar Ardhiata", nilaiOkHps: "350", periode: "2026-01-01", status: "open" },
  { id: "2", name: "Pembangunan Sabodam Gayo Lues", operasi: "Operasi 1", ktt: "", nilaiOkHps: "200", periode: "2026-05-01", status: "open" },
  { id: "3", name: "Irigasi Sei Wampu", operasi: "Operasi 1", ktt: "", nilaiOkHps: "200", periode: "2026-06-01", status: "open" },
  { id: "4", name: "Bendung Sidoras", operasi: "Operasi 1", ktt: "", nilaiOkHps: "", periode: "2026-06-01", status: "open" },
  { id: "5", name: "Penanganan Pasca Bencana Muara Sungai", operasi: "Operasi 1", ktt: "Rizwan Yan Tanzil", nilaiOkHps: "200", periode: "2026-03-01", status: "open" },
  { id: "6", name: "Pengendali Banjir Kawasan Industri Medan (KIM)", operasi: "Operasi 1", ktt: "Aris Munandar", nilaiOkHps: "250", periode: "2026-03-01", status: "open" },
  { id: "7", name: "Peningkatan Jaringan Irigasi Tahap IV (Oplah) Jambi", operasi: "Operasi 1", ktt: "", nilaiOkHps: "50", periode: "2026-04-01", status: "open" },
  { id: "8", name: "Pengendalian Banjir Sistem Sungai Bendung Kota Palembang", operasi: "Operasi 1", ktt: "Reza Apriadi", nilaiOkHps: "424,00", periode: "2026-03-01", status: "open" },
  { id: "9", name: "Pembangunan Jaringan Air Baku KSCS Paket 4", operasi: "Operasi 1", ktt: "", nilaiOkHps: "180", periode: "2026-06-01", status: "open" },
  { id: "10", name: "Pengendali Banjir Sungai Ciliwung Paket 1 (Manggarai - Kamp. Melayu)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "238", periode: "2026-04-01", status: "open" },
  { id: "11", name: "Pengendali Banjir Sungai Ciliwung Paket 2 (Kamp. Melayu - Kalibata)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "180", periode: "2026-04-01", status: "open" },
  { id: "12", name: "Pengendali Banjir Sungai Ciliwung Paket 3 (Kalibata - Condet)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "210", periode: "2026-04-01", status: "open" },
  { id: "13", name: "Pengendali Banjir Sungai Ciliwung Paket 4 (Condet - TB Simatupang)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "190", periode: "2026-04-01", status: "open" },
  { id: "14", name: "Kali Bekasi Paket 2", operasi: "Operasi 1", ktt: "", nilaiOkHps: "760", periode: "2026-07-01", status: "open" },
  { id: "15", name: "Kali Bekasi Paket 3", operasi: "Operasi 1", ktt: "", nilaiOkHps: "757", periode: "2026-07-01", status: "open" },
  { id: "16", name: "Kali Bekasi Paket 4", operasi: "Operasi 1", ktt: "", nilaiOkHps: "797", periode: "2026-07-01", status: "open" },
  { id: "17", name: "Kali Bekasi Paket 5", operasi: "Operasi 1", ktt: "", nilaiOkHps: "792", periode: "2026-07-01", status: "open" },
  { id: "18", name: "Irigasi Rentang Kanan", operasi: "Operasi 1", ktt: "", nilaiOkHps: "500", periode: "2026-07-01", status: "open" },
  { id: "19", name: "Cimanuk Rising Dykes at Upper Cimanuk Garut (CWC-7g)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "271", periode: "2026-07-01", status: "open" },
  { id: "20", name: "Waste Water Treatment Plan Banjardowo- CWIS 01 (IPAL)", operasi: "Operasi 1", ktt: "Eko Supriyono", nilaiOkHps: "670", periode: "2026-01-01", status: "open" },
  { id: "21", name: "Commercial area sewerline (central and south ) semarang - CWIS - 04", operasi: "Operasi 1", ktt: "Deddy Anwar", nilaiOkHps: "244.871", periode: "2026-04-01", status: "open" },
  { id: "22", name: "Normalisasi Sungai Sayung", operasi: "Operasi 1", ktt: "", nilaiOkHps: "350", periode: "2026-05-01", status: "open" },
  { id: "23", name: "Juana River Improvement", operasi: "Operasi 1", ktt: "", nilaiOkHps: "326", periode: "2026-05-01", status: "open" },
  { id: "24", name: "Normalisasi JU-1 River (Kudus)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "220", periode: "2026-06-01", status: "open" },
  { id: "25", name: "Normalisasi Pompa Kali Baru Kali Asin", operasi: "Operasi 1", ktt: "", nilaiOkHps: "350", periode: "2026-06-01", status: "open" },
  { id: "26", name: "Sungai Silandak", operasi: "Operasi 1", ktt: "", nilaiOkHps: "180", periode: "2026-06-01", status: "open" },
  { id: "27", name: "Babakan River & Drainage Works in Brebes (CWC-5b)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "270", periode: "2026-06-01", status: "open" },
  { id: "28", name: "Pengendali Banjir Kawasan Yogyakarta International Airport (YIA)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "216.2", periode: "2026-02-01", status: "closed" },
  { id: "29", name: "Main Trunk Jogja Paket 2 (Limbah)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "220", periode: "2026-04-01", status: "open" },
  { id: "30", name: "Pembangunan Pengendali Banjir Afvour Buntung Kab. Sidoarjo", operasi: "Operasi 1", ktt: "", nilaiOkHps: "250", periode: "2026-07-01", status: "open" },
  { id: "31", name: "Pengendali Banjir Kali Lamong", operasi: "Operasi 1", ktt: "Ganar Ardhiata", nilaiOkHps: "224,49", periode: "2026-01-01", status: "open" },
  { id: "32", name: "Sabo Dam Gunung Semeru Paket S4", operasi: "Operasi 1", ktt: "", nilaiOkHps: "169", periode: "2026-07-01", status: "open" },
  { id: "33", name: "Rehabilitasi Irigasi Mrican", operasi: "Operasi 1", ktt: "Ery Nugroho", nilaiOkHps: "368,09", periode: "2026-01-01", status: "open" },
  { id: "34", name: "Peningjkatan Jaringan Irigasi D.I Waduk Bening Paket 2", operasi: "Operasi 1", ktt: "Dendy P", nilaiOkHps: "327,61", periode: "2026-01-01", status: "open" },
  { id: "35", name: "Rehabilitasi D.I Talang", operasi: "Operasi 1", ktt: "Andrianto Widhi Nugroho", nilaiOkHps: "272,84", periode: "2026-01-01", status: "open" },
  { id: "36", name: "Perluasan Dermaga Teluk Lamong", operasi: "Operasi 1", ktt: "", nilaiOkHps: "390", periode: "2026-06-01", status: "open" },
  { id: "37", name: "Hunian Tetap Pasca Bencana - Aceh Tamiang", operasi: "Operasi 2", ktt: "Kopas B", nilaiOkHps: "170", periode: "2026-01-01", status: "open" },
  { id: "38", name: "Eco Fishing Belawan (Tambak)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "", periode: "2026-07-01", status: "open" },
  { id: "39", name: "Penanganan Pasca Bencana Jalan Ruas Sibolga", operasi: "Operasi 2", ktt: "Masy'aril", nilaiOkHps: "250", periode: "2026-02-01", status: "closed" },
  { id: "40", name: "Jembatan Muka Kuning - Batam", operasi: "Operasi 2", ktt: "Syahril Budi", nilaiOkHps: "400", periode: "2026-09-01", status: "open" },
  { id: "41", name: "Jembatan Tratak Buluh (Riau)", operasi: "Operasi 2", ktt: "", nilaiOkHps: "150", periode: "2026-06-01", status: "open" },
  { id: "42", name: "Fly Over Ujan Mas/Gunung Mas - Muara Enim", operasi: "Operasi 2", ktt: "", nilaiOkHps: "300", periode: "2026-07-01", status: "open" },
  { id: "43", name: "Depo Muara Gula (Muara Enim)", operasi: "Operasi 2", ktt: "", nilaiOkHps: "1000", periode: "2026-07-01", status: "open" },
  { id: "44", name: "Jalan Tol Trans Sumatera / Simpang Susun Mataram (Palembang)", operasi: "Operasi 2", ktt: "", nilaiOkHps: "500", periode: "2026-04-01", status: "open" },
  { id: "45", name: "Akses Merak-Tangerang (Alamsutra) / SS Cikupa", operasi: "Operasi 2", ktt: "", nilaiOkHps: "200", periode: "2026-06-01", status: "open" },
  { id: "46", name: "Akses Tol Cibenda", operasi: "Operasi 2", ktt: "", nilaiOkHps: "300", periode: "2026-06-01", status: "open" },
  { id: "47", name: "Tol Serbaraja 2A", operasi: "Operasi 2", ktt: "M. Andri", nilaiOkHps: "250", periode: "2026-02-01", status: "open" },
  { id: "48", name: "Penataan area terminal 2F (parkir) lounge umroh Bandara Soeta", operasi: "Operasi 2", ktt: "M. Andri", nilaiOkHps: "18", periode: "2026-04-01", status: "open" },
  { id: "49", name: "FO Bintaro Puspita", operasi: "Operasi 2", ktt: "", nilaiOkHps: "100", periode: "2026-05-01", status: "open" },
  { id: "50", name: "Package 2: Construction of Main Trunk Sewer Jakarta Sewerage Development Project (Zone 6) (Phase 1), JICA Loan IP-579 (Retender)", operasi: "Operasi 1", ktt: "Nur Rahim", nilaiOkHps: "1300", periode: "2026-05-01", status: "open" },
  { id: "51", name: "Proyek LRT Jakarta Phase 1C : Manggarai - Dukuh Atas", operasi: "Operasi 1", ktt: "", nilaiOkHps: "1711.71", periode: "2026-05-01", status: "open" },
  { id: "52", name: "Proyek LRT Jakarta Phase 2A : Kelapa Gading - JIS", operasi: "Operasi 1", ktt: "", nilaiOkHps: "1051.05", periode: "2026-03-01", status: "open" },
  { id: "53", name: "MRT East - West (CP - 109) - Depot", operasi: "Operasi 1", ktt: "Almadani Jayadi", nilaiOkHps: "3500", periode: "2026-04-01", status: "open" },
  { id: "54", name: "MRT East - West (CP 105)", operasi: "Operasi 1", ktt: "Almadani Jayadi", nilaiOkHps: "3000", periode: "2026-05-01", status: "open" },
  { id: "55", name: "MRT East - West (CP 102-103)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "", periode: "2026-12-01", status: "open" },
  { id: "56", name: "CP100 : Jakarta Metropolitan MRT East West Line Project Phase 1 Stage 1", operasi: "Operasi 1", ktt: "Almadani Jayadi", nilaiOkHps: "150,00", periode: "2026-01-01", status: "open" },
  { id: "57", name: "Fasilitas Darat KaliBaru", operasi: "Operasi 1", ktt: "", nilaiOkHps: "400", periode: "2026-05-01", status: "open" },
  { id: "58", name: "Pedestrian Deck Dukuh Atas", operasi: "Operasi 2", ktt: "", nilaiOkHps: "240", periode: "2026-04-01", status: "open" },
  { id: "59", name: "Perlintasan Simpang Tidak Sebidang Telaga Harapan (Metland)", operasi: "Operasi 2", ktt: "Yasir", nilaiOkHps: "170", periode: "2026-07-01", status: "open" },
  { id: "60", name: "On Off Ramp Nanjung - Tol SOROJA", operasi: "Operasi 2", ktt: "", nilaiOkHps: "150", periode: "2026-07-01", status: "open" },
  { id: "61", name: "Patimban Port Paket 7A", operasi: "Operasi 1", ktt: "", nilaiOkHps: "450", periode: "2026-07-01", status: "open" },
  { id: "62", name: "Eco Fishing  Cilacap (Tambak)", operasi: "Operasi 1", ktt: "", nilaiOkHps: "350", periode: "2026-05-01", status: "open" },
  { id: "63", name: "Jalan Tol JOR Eleveted Ulujami Cikunir", operasi: "Operasi 2", ktt: "", nilaiOkHps: "1500", periode: "2026-06-01", status: "open" },
  { id: "64", name: "Pelebaran Jalan Tol Cirebon", operasi: "Operasi 2", ktt: "", nilaiOkHps: "200", periode: "2026-05-01", status: "open" },
  { id: "65", name: "Akses Tol Patimban", operasi: "Operasi 2", ktt: "", nilaiOkHps: "250", periode: "2026-03-01", status: "closed" },
  { id: "66", name: "Rest Area Cisumdawu", operasi: "Operasi 2", ktt: "", nilaiOkHps: "250", periode: "2026-05-01", status: "open" },
  { id: "67", name: "Fly Over Klaten-1", operasi: "Operasi 2", ktt: "Dendy P", nilaiOkHps: "180", periode: "2026-06-01", status: "open" },
  { id: "68", name: "Fly Over Klaten-2", operasi: "Operasi 2", ktt: "Dendy P", nilaiOkHps: "200", periode: "2026-06-01", status: "open" },
  { id: "69", name: "BRT Jalur On Corridor Semarang", operasi: "Operasi 2", ktt: "", nilaiOkHps: "300", periode: "2026-05-01", status: "open" },
  { id: "70", name: "Tol Bawen Jogja", operasi: "Operasi 2", ktt: "R.Rizki J", nilaiOkHps: "400", periode: "2026-04-01", status: "open" },
  { id: "71", name: "Jembatan Kali Bedadung - Pansela (Jatim)", operasi: "Operasi 2", ktt: "R.Rizki J", nilaiOkHps: "200", periode: "2026-04-01", status: "open" },
  { id: "72", name: "Jalan Pansela Ruas Puger-Senen", operasi: "Operasi 2", ktt: "R.Rizki J", nilaiOkHps: "", periode: "2026-04-01", status: "open" },
  { id: "73", name: "Pembangunan Jalan Senen Rejo - Banyuwangi 3", operasi: "Operasi 2", ktt: "R.Rizki J", nilaiOkHps: "230", periode: "2026-04-01", status: "open" },
  { id: "74", name: "Temporary Runway Bandara Juanda Surabaya", operasi: "Operasi 2", ktt: "Dendy P", nilaiOkHps: "800", periode: "2026-06-01", status: "open" },
  { id: "75", name: "Fly Over Pelangi", operasi: "Operasi 2", ktt: "Rivai", nilaiOkHps: "300", periode: "2026-04-01", status: "open" },
  { id: "76", name: "Be Handle Tanjung Priok", operasi: "Operasi 1", ktt: "M. Andri / Edy Suyanto", nilaiOkHps: "250", periode: "2026-04-01", status: "open" },
  { id: "77", name: "Jalan Ringinrejo - Sp. Jolosutro", operasi: "Operasi 2", ktt: "Rizki J", nilaiOkHps: "463", periode: "2026-02-01", status: "open" },
  { id: "78", name: "Tanggul Muara Karang", operasi: "Operasi 2", ktt: "Ridwan Budi", nilaiOkHps: "", periode: "2026-02-01", status: "open" },
  { id: "79", name: "Off Ramp Bocimi", operasi: "Operasi 2", ktt: "Dody Arief", nilaiOkHps: "", periode: "2026-03-01", status: "open" },
  { id: "80", name: "Tol Solo - Jogja Ruas ke Bandara NYIA", operasi: "Operasi 2", ktt: "Dendy P", nilaiOkHps: "", periode: "2026-04-01", status: "open" },
  { id: "81", name: "Tol Serang Panimbang Seksi 3B Lanjutan", operasi: "Operasi 2", ktt: "Edy Suyanto", nilaiOkHps: "", periode: "2026-04-01", status: "open" },
  { id: "82", name: "Container Yard BMS (Berlian Manyar Sejahtera)", operasi: "Operasi 1", ktt: "Dendy P", nilaiOkHps: "250", periode: "2026-04-01", status: "open" },
];

export function formatDate(iso: string) {
  if (!iso) return "-";
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatPeriode(iso: string) {
  if (!iso) return "-";
  return new Date(iso).toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });
}

export function formatNilai(v: string) {
  if (!v) return "-";
  const n = Number(v);
  return Number.isFinite(n) ? `${n.toLocaleString("id-ID")} M` : v;
}
