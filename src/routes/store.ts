import { writable, type Writable } from "svelte/store";
import type { Articles } from "./Types";

export const search: Writable<string> = writable("");
export const articles: Writable<Articles[]> = writable([]);
