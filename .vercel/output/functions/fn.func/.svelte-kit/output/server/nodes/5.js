import * as server from '../entries/pages/roster/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/roster/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/roster/+page.server.js";
export const imports = ["_app/immutable/nodes/5.939bc24a.js","_app/immutable/chunks/scheduler.92e2bf69.js","_app/immutable/chunks/index.613e6676.js","_app/immutable/chunks/each.fd586bc7.js"];
export const stylesheets = ["_app/immutable/assets/5.bb721b8e.css"];
export const fonts = [];
