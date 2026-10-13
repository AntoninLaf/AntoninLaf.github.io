// The project registry.
// To add a project: create projects/<slug>/index.js (copy an existing one), then add one line here.
import acteurly from "./acteurly/index.js";
import versytalks from "./versytalks/index.js";
import versynow from "./versynow/index.js";
import glrlight from "./glrlight/index.js";

export const projects = [acteurly, versytalks, versynow, glrlight].sort((a, b) => a.order - b.order);

export function findProject(slug) {
  return projects.find((p) => p.slug === slug) || null;
}
