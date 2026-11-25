import { i as redirect, n as fail, t as error } from "../../../../chunks/exports.js";
import { n as apiFetch } from "../../../../chunks/api.js";
//#region src/routes/games/[id]/+page.server.js
async function load({ params, locals, cookies }) {
	if (!locals.user) throw redirect(303, "/login");
	const res = await apiFetch(`/api/games/${params.id}`, cookies);
	if (res.status === 404) throw error(404, "Game not found");
	if (res.status === 403) throw error(403, "You are not in this game");
	if (!res.ok) throw error(res.status, "Could not load game");
	return { game: await res.json() };
}
var actions = { shoot: async ({ params, cookies, request }) => {
	const data = await request.formData();
	const row = Number(data.get("row"));
	const col = Number(data.get("col"));
	const res = await apiFetch(`/api/games/${params.id}/shots`, cookies, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			row,
			col
		})
	});
	if (!res.ok) {
		const body = await res.json().catch(() => ({}));
		return fail(res.status, { error: body.message ?? "Shot failed" });
	}
	const updated = await res.json();
	String(updated.player1);
	return {
		ok: true,
		row,
		col
	};
} };
//#endregion
export { actions, load };

//# sourceMappingURL=_page.server.js.map