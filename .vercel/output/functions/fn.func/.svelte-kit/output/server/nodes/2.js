

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4f9e87e8.js","_app/immutable/chunks/scheduler.7c0882ab.js","_app/immutable/chunks/index.ad300527.js"];
export const stylesheets = ["_app/immutable/assets/2.53858f3d.css"];
export const fonts = [];
