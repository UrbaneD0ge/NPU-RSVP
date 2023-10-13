

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.fadacf29.js","_app/immutable/chunks/scheduler.157af4dc.js","_app/immutable/chunks/index.358c5b75.js","_app/immutable/chunks/paths.0e3564de.js"];
export const stylesheets = ["_app/immutable/assets/0.f1d09260.css"];
export const fonts = [];
