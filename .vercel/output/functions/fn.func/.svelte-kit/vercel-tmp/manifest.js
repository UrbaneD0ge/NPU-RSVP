export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bonk-cheems.gif","favicon-16x16.png","favicon-32x32.png","favicon.ico","NPU_AD_Invitation.webp","STD.png"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png",".ico":"image/vnd.microsoft.icon",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.29f53827.js","app":"_app/immutable/entry/app.4fa82342.js","imports":["_app/immutable/entry/start.29f53827.js","_app/immutable/chunks/scheduler.92e2bf69.js","_app/immutable/chunks/singletons.4b768a3f.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.4fa82342.js","_app/immutable/chunks/scheduler.92e2bf69.js","_app/immutable/chunks/index.613e6676.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/RSVP",
				pattern: /^\/RSVP\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/checkin",
				pattern: /^\/checkin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/declined",
				pattern: /^\/declined\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/roster",
				pattern: /^\/roster\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/success",
				pattern: /^\/success\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
