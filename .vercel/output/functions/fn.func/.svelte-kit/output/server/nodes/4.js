

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/declined/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.e34d60e6.js","_app/immutable/chunks/scheduler.92e2bf69.js","_app/immutable/chunks/index.613e6676.js"];
export const stylesheets = ["_app/immutable/assets/4.7dd80ab3.css"];
export const fonts = [];
