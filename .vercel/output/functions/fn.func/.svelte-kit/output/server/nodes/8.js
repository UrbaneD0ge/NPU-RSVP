import * as server from '../entries/pages/_id_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.81682bed.js","_app/immutable/chunks/scheduler.157af4dc.js","_app/immutable/chunks/index.358c5b75.js","_app/immutable/chunks/forms.0a9d1d46.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.761b6032.js","_app/immutable/chunks/paths.0e3564de.js"];
export const stylesheets = ["_app/immutable/assets/8.f7c21d2a.css"];
export const fonts = [];
