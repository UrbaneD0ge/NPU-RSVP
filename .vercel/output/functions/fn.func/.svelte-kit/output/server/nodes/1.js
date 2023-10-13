

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a469e2f6.js","_app/immutable/chunks/scheduler.157af4dc.js","_app/immutable/chunks/index.358c5b75.js","_app/immutable/chunks/singletons.761b6032.js","_app/immutable/chunks/paths.0e3564de.js"];
export const stylesheets = [];
export const fonts = [];
