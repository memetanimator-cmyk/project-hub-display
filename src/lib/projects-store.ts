import { useSyncExternalStore } from "react";
import { projects as defaultProjects, type Project } from "./projects";

const STORAGE_KEY = "tender-projects-v1";
const META_KEY = "tender-projects-meta-v1";

export type ImportMeta = { fileName: string; importedAt: string; count: number };

let cache: Project[] | null = null;
let metaCache: ImportMeta | null | undefined;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function read(): Project[] {
  if (cache) return cache;
  if (typeof window === "undefined") return defaultProjects;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    cache = raw ? (JSON.parse(raw) as Project[]) : defaultProjects;
  } catch {
    cache = defaultProjects;
  }
  return cache;
}

function readMeta(): ImportMeta | null {
  if (metaCache !== undefined) return metaCache;
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(META_KEY);
    metaCache = raw ? (JSON.parse(raw) as ImportMeta) : null;
  } catch {
    metaCache = null;
  }
  return metaCache;
}

export function setImportedProjects(items: Project[], meta: ImportMeta) {
  cache = items;
  metaCache = meta;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.localStorage.setItem(META_KEY, JSON.stringify(meta));
  emit();
}

export function resetProjects() {
  cache = defaultProjects;
  metaCache = null;
  window.localStorage.removeItem(STORAGE_KEY);
  window.localStorage.removeItem(META_KEY);
  emit();
}

export function getProjects(): Project[] {
  return read();
}

export function useProjects(): Project[] {
  return useSyncExternalStore(subscribe, read, () => defaultProjects);
}

export function useImportMeta(): ImportMeta | null {
  return useSyncExternalStore(subscribe, readMeta, () => null);
}
