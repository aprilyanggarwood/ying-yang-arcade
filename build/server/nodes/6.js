

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/crossword/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DWf0GSy5.js","_app/immutable/chunks/DLMTFuqu.js"];
export const stylesheets = ["_app/immutable/assets/6.DIK5ePlz.css"];
export const fonts = [];
