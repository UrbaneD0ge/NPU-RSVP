

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0e0931a9.js","_app/immutable/chunks/scheduler.92e2bf69.js","_app/immutable/chunks/index.613e6676.js"];
export const stylesheets = [];
export const fonts = [];
