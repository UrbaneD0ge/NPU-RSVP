import * as server from '../entries/pages/_id_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.c4dae630.js","_app/immutable/chunks/scheduler.7c0882ab.js","_app/immutable/chunks/index.ad300527.js","_app/immutable/chunks/forms.0a0bf3f8.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.c4d3ee0b.js","_app/immutable/chunks/paths.1edf8b5c.js"];
export const stylesheets = ["_app/immutable/assets/4.f7c21d2a.css"];
export const fonts = [];
