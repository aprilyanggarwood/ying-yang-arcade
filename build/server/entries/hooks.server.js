import { t as API_URL } from "../chunks/api.js";
//#region src/hooks.server.js
async function handle({ event, resolve }) {
	const sessionId = event.cookies.get("sessionId");
	event.locals.user = null;
	if (sessionId) {
		const res = await fetch(`${API_URL}/api/auth/me`, { headers: { cookie: `sessionId=${sessionId}` } });
		if (res.ok) event.locals.user = await res.json();
	}
	return resolve(event);
}
//#endregion
export { handle };

//# sourceMappingURL=hooks.server.js.map