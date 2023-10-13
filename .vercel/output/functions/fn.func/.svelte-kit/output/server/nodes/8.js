import * as server from '../entries/pages/_id_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.fc5ff4da.js","_app/immutable/chunks/scheduler.92e2bf69.js","_app/immutable/chunks/index.613e6676.js","_app/immutable/chunks/forms.a2a9a37a.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.4b768a3f.js"];
export const stylesheets = ["_app/immutable/assets/8.45700b8f.css"];
export const fonts = [];
