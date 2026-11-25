import { i as redirect, n as fail } from "../../../chunks/exports.js";
import { n as apiFetch } from "../../../chunks/api.js";
//#region src/routes/games/+page.server.js
async function load({ locals, cookies }) {
	if (!locals.user) throw redirect(303, "/login");
	const res = await apiFetch("/api/games", cookies);
	return { games: res.ok ? await res.json() : [] };
}
var actions = {
	create: async ({ cookies }) => {
		const res = await apiFetch("/api/games", cookies, { method: "POST" });
		if (!res.ok) return fail(res.status, { error: "Could not create game" });
		const game = await res.json();
		throw redirect(303, `/games/${game._id}`);
	},
	join: async ({ cookies, request }) => {
		const id = (await request.formData()).get("id");
		const res = await apiFetch(`/api/games/${id}/join`, cookies, { method: "POST" });
		if (!res.ok) {
			const body = await res.json().catch(() => ({}));
			return fail(res.status, { error: body.message ?? "Could not join game" });
		}
		throw redirect(303, `/games/${id}`);
	}
};
//#endregion
export { actions, load };

//# sourceMappingURL=_page.server.js.map