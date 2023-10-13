

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5c71da60.js","_app/immutable/chunks/scheduler.7c0882ab.js","_app/immutable/chunks/index.ad300527.js","_app/immutable/chunks/paths.1edf8b5c.js"];
export const stylesheets = ["_app/immutable/assets/0.f1d09260.css"];
export const fonts = [];
