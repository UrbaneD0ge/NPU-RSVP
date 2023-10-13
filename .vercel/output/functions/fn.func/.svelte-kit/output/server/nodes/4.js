

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/declined/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.ef4d63ab.js","_app/immutable/chunks/scheduler.157af4dc.js","_app/immutable/chunks/index.358c5b75.js"];
export const stylesheets = ["_app/immutable/assets/4.6267c42e.css"];
export const fonts = [];
