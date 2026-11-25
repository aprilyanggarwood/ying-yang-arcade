import { i as redirect } from "../../../chunks/exports.js";
import { t as API_URL } from "../../../chunks/api.js";
//#region src/routes/logout/+page.server.js
var actions = { default: async ({ cookies }) => {
	const sessionId = cookies.get("sessionId");
	if (sessionId) {
		await fetch(`${API_URL}/api/auth/logout`, {
			method: "POST",
			headers: { cookie: `sessionId=${sessionId}` }
		});
		cookies.delete("sessionId", { path: "/" });
	}
	throw redirect(303, "/");
} };
//#endregion
export { actions };

//# sourceMappingURL=_page.server.js.map