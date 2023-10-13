

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.53f8348d.js","_app/immutable/chunks/scheduler.157af4dc.js","_app/immutable/chunks/index.358c5b75.js"];
export const stylesheets = ["_app/immutable/assets/2.53858f3d.css"];
export const fonts = [];
