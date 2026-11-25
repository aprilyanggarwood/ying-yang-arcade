import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.DCU_oRHH.js","_app/immutable/chunks/DLMTFuqu.js","_app/immutable/chunks/EOym0DHI.js","_app/immutable/entry/payload.DSmR2FwN.js","_app/immutable/chunks/DU6yHA9G.js","_app/immutable/chunks/D-_NMyq0.js"];
export const stylesheets = ["_app/immutable/assets/0.D8B_K9fX.css"];
export const fonts = [];
