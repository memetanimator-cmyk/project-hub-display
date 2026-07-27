export type Project = {
  id: string;
  name: string;
  kttTender: string;
  startDate: string; // ISO
  status: "open" | "closed";
};

export const projects: Project[] = [
  { id: "1", name: "Website Redesign", startDate: "2026-07-20", status: "open", kttTender: "KTT-001" },
  { id: "2", name: "Mobile App v2", startDate: "2026-07-18", status: "open", kttTender: "KTT-002" },
  { id: "3", name: "Sistem HRD", startDate: "2026-07-15", status: "open", kttTender: "KTT-003" },
  { id: "4", name: "Marketing Campaign", startDate: "2026-07-12", status: "open", kttTender: "KTT-004" },
  { id: "5", name: "E-Commerce Platform", startDate: "2026-07-10", status: "open", kttTender: "KTT-005" },
  { id: "6", name: "Dashboard Analytics", startDate: "2026-07-08", status: "open", kttTender: "KTT-006" },
  { id: "7", name: "Chatbot AI", startDate: "2026-07-05", status: "open", kttTender: "KTT-007" },
  { id: "8", name: "Inventory System", startDate: "2026-07-02", status: "open", kttTender: "KTT-008" },
  { id: "9", name: "Payroll Module", startDate: "2026-06-28", status: "open", kttTender: "KTT-009" },
  { id: "10", name: "CRM Integration", startDate: "2026-06-25", status: "open", kttTender: "KTT-010" },
  { id: "11", name: "Blog Platform", startDate: "2026-06-20", status: "open", kttTender: "KTT-011" },
  { id: "12", name: "Landing Page Promo", startDate: "2026-06-18", status: "open", kttTender: "KTT-012" },
  { id: "13", name: "API Gateway", startDate: "2026-06-15", status: "open", kttTender: "KTT-013" },
  { id: "14", name: "Reporting Tool", startDate: "2026-06-12", status: "open", kttTender: "KTT-014" },
  { id: "15", name: "Notification Service", startDate: "2026-06-10", status: "open", kttTender: "KTT-015" },
  { id: "16", name: "Auth SSO", startDate: "2026-06-05", status: "open", kttTender: "KTT-016" },
  { id: "17", name: "Data Migration", startDate: "2026-06-01", status: "open", kttTender: "KTT-017" },
  { id: "18", name: "Booking System", startDate: "2026-05-28", status: "open", kttTender: "KTT-018" },

  { id: "19", name: "Legacy CRM", startDate: "2026-01-10", status: "closed", kttTender: "KTT-019" },
  { id: "20", name: "Old Website v1", startDate: "2025-11-05", status: "closed", kttTender: "KTT-020" },
  { id: "21", name: "Prototype POS", startDate: "2025-09-15", status: "closed", kttTender: "KTT-021" },
  { id: "22", name: "Internal Wiki", startDate: "2025-08-20", status: "closed", kttTender: "KTT-022" },
  { id: "23", name: "Survey Tool", startDate: "2025-07-01", status: "closed", kttTender: "KTT-023" },
  { id: "24", name: "Landing Event 2025", startDate: "2025-05-12", status: "closed", kttTender: "KTT-024" },
  { id: "25", name: "Beta Mobile App", startDate: "2025-03-08", status: "closed", kttTender: "KTT-025" },
  { id: "26", name: "Newsletter Service", startDate: "2025-02-14", status: "closed", kttTender: "KTT-026" },
  { id: "27", name: "Analytics MVP", startDate: "2025-01-20", status: "closed", kttTender: "KTT-027" },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
export function formatTenderMonth(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });
}
