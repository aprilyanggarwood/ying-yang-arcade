import * as server from '../entries/pages/register/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/11.plknFsds.js","_app/immutable/chunks/DLMTFuqu.js"];
export const stylesheets = ["_app/immutable/assets/11.rXH0Wh24.css"];
export const fonts = [];
