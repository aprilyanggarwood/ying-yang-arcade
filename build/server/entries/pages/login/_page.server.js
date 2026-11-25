import { i as redirect, n as fail } from "../../../chunks/exports.js";
import { t as API_URL } from "../../../chunks/api.js";
//#region src/routes/login/+page.server.js
var actions = { default: async ({ request, cookies }) => {
	const data = await request.formData();
	const username = data.get("username");
	const password = data.get("password");
	const res = await fetch(`${API_URL}/api/auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			username,
			password
		})
	});
	if (!res.ok) {
		const body = await res.json().catch(() => ({}));
		return fail(res.status, { error: body.message ?? "Registration failed" });
	}
	const setCookie = res.headers.get("set-cookie");
	if (setCookie) {
		const match = setCookie.match(/sessionId=([^;]+)/);
		if (match) cookies.set("sessionId", match[1], {
			path: "/",
			httpOnly: true,
			sameSite: "lax",
			maxAge: 604800
		});
	}
	throw redirect(303, "/");
} };
//#endregion
export { actions };

//# sourceMappingURL=_page.server.js.map