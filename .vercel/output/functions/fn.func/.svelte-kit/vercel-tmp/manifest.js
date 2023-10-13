export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bonk-cheems.gif","favicon-16x16.png","favicon-32x32.png","favicon.ico","NPU_AD_Invitation.webp"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png",".ico":"image/vnd.microsoft.icon",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.c7af39fa.js","app":"_app/immutable/entry/app.a6bf428a.js","imports":["_app/immutable/entry/start.c7af39fa.js","_app/immutable/chunks/scheduler.157af4dc.js","_app/immutable/chunks/singletons.761b6032.js","_app/immutable/chunks/paths.0e3564de.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.a6bf428a.js","_app/immutable/chunks/scheduler.157af4dc.js","_app/immutable/chunks/index.358c5b75.js"],"stylesheets":[],"fonts":[]},
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
