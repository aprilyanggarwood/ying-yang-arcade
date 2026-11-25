import { create_server } from './index.js';
const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	app_dir: "_app",
	app_path: "_app",
	assets: new Set(["images/mountains-from-plane.jpg","images/purple-flowers.jpg","images/red-van-coast.jpg","images/yellow-tulips.jpg","robots.txt"]),
	mime_types: {".jpg":"image/jpeg",".txt":"text/plain"},
	client: {start:"_app/immutable/entry/start.gddmm5Q6.js",app:"_app/immutable/entry/app.DII5ziYF.js",imports:["_app/immutable/entry/start.gddmm5Q6.js","_app/immutable/entry/payload.DSmR2FwN.js","_app/immutable/chunks/CRzLMJPS.js","_app/immutable/chunks/DqzUFT96.js","_app/immutable/chunks/DLMTFuqu.js","_app/immutable/chunks/DU6yHA9G.js","_app/immutable/chunks/EOym0DHI.js","_app/immutable/chunks/BxCYeVYX.js","_app/immutable/entry/app.DII5ziYF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
	
	nodes: [
		__memo(() => import('./nodes/0.js')),
		__memo(() => import('./nodes/1.js')),
		__memo(() => import('./nodes/2.js')),
		__memo(() => import('./nodes/3.js')),
		__memo(() => import('./nodes/4.js')),
		__memo(() => import('./nodes/5.js')),
		__memo(() => import('./nodes/6.js')),
		__memo(() => import('./nodes/7.js')),
		__memo(() => import('./nodes/8.js')),
		__memo(() => import('./nodes/9.js')),
		__memo(() => import('./nodes/10.js')),
		__memo(() => import('./nodes/11.js'))
	],
	remotes: {
		
	},
	routes: [
		{
			id: "/",
			pattern: /^\/$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 2 },
			endpoint: null
		},
		{
			id: "/2048",
			pattern: /^\/2048\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 3 },
			endpoint: null
		},
		{
			id: "/about",
			pattern: /^\/about\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 4 },
			endpoint: null
		},
		{
			id: "/contact",
			pattern: /^\/contact\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 5 },
			endpoint: null
		},
		{
			id: "/crossword",
			pattern: /^\/crossword\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 6 },
			endpoint: null
		},
		{
			id: "/games",
			pattern: /^\/games\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 7 },
			endpoint: null
		},
		{
			id: "/games/[id]",
			pattern: /^\/games\/([^/]+?)\/?$/,
			params: [{"name":"id","optional":false,"rest":false,"chained":false}],
			page: { layouts: [0,], errors: [1,], leaf: 8 },
			endpoint: null
		},
		{
			id: "/login",
			pattern: /^\/login\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 9 },
			endpoint: null
		},
		{
			id: "/logout",
			pattern: /^\/logout\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 10 },
			endpoint: null
		},
		{
			id: "/register",
			pattern: /^\/register\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 11 },
			endpoint: null
		}
	],
	prerendered_routes: new Set([]),
	matchers: async () => {
		return {};
	},
	server_assets: {}
}
})();
export const server = create_server(manifest);