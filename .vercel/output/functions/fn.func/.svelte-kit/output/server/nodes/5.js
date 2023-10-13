import * as server from '../entries/pages/roster/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/roster/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/roster/+page.server.js";
export const imports = ["_app/immutable/nodes/5.a9d7f116.js","_app/immutable/chunks/scheduler.157af4dc.js","_app/immutable/chunks/index.358c5b75.js","_app/immutable/chunks/each.7604fea7.js"];
export const stylesheets = ["_app/immutable/assets/5.bb721b8e.css"];
export const fonts = [];
