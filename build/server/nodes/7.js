import * as server from '../entries/pages/games/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/games/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/games/+page.server.js";
export const imports = ["_app/immutable/nodes/7.DZADVh1K.js","_app/immutable/chunks/DLMTFuqu.js","_app/immutable/chunks/EOym0DHI.js","_app/immutable/entry/payload.DSmR2FwN.js","_app/immutable/chunks/DU6yHA9G.js","_app/immutable/chunks/D-_NMyq0.js"];
export const stylesheets = ["_app/immutable/assets/7.C8iAoMvQ.css"];
export const fonts = [];
