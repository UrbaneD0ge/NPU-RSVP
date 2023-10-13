

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.fac5e0db.js","_app/immutable/chunks/scheduler.92e2bf69.js","_app/immutable/chunks/index.613e6676.js","_app/immutable/chunks/singletons.4b768a3f.js"];
export const stylesheets = ["_app/immutable/assets/0.c074fc28.css"];
export const fonts = [];
