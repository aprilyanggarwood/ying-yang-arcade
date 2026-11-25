import "./shared-warnings.js";
//#endregion
//#region src/lib/server/api.js
var API_URL = "http://localhost:3000";
async function apiFetch(path, cookies, options = {}) {
	const sessionId = cookies.get("sessionId");
	return fetch(`${API_URL}${path}`, {
		...options,
		headers: {
			...options.headers ?? {},
			...sessionId ? { cookie: `sessionId=${sessionId}` } : {}
		}
	});
}
//#endregion
export { apiFetch as n, API_URL as t };

//# sourceMappingURL=api.js.map