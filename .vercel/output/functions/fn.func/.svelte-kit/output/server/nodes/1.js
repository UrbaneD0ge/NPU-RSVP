

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e6275422.js","_app/immutable/chunks/scheduler.7c0882ab.js","_app/immutable/chunks/index.ad300527.js","_app/immutable/chunks/singletons.c4d3ee0b.js","_app/immutable/chunks/paths.1edf8b5c.js"];
export const stylesheets = [];
export const fonts = [];
