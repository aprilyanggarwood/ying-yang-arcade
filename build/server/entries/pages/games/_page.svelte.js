import { d as escape_html, i as ensure_array_like, l as attr, r as derived, s as stringify } from "../../../chunks/server2.js";
import { t as page } from "../../../chunks/state.js";
//#region src/routes/games/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data, form } = $$props;
		let user = derived(() => page.data.user);
		let myGames = derived(() => data.games.filter((g) => String(g.player1) === String(user()?._id) || String(g.player2) === String(user()?._id)));
		let openGames = derived(() => data.games.filter((g) => g.status === "waiting" && String(g.player1) !== String(user()?._id)));
		function gameLabel(game) {
			if (game.status === "waiting") return "waiting for an opponent";
			if (game.status === "complete") return String(game.winner) === String(user()?._id) ? "you won" : "you lost";
			return String(game.turn) === String(user()?._id) ? "your turn" : "opponent's turn";
		}
		$$renderer.push(`<main><h1>Battleship</h1> `);
		if (form?.error) $$renderer.push(`<!--[0--><p class="error svelte-6rw1dw">${escape_html(form.error)}</p>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <form method="POST" action="?/create"><button type="submit">New game</button></form> <section class="svelte-6rw1dw"><h2>Open games to join</h2> `);
		if (openGames().length === 0) $$renderer.push(`<!--[0--><p>No open games right now. Create one above.</p>`);
		else {
			$$renderer.push(`<!--[-1--><ul class="svelte-6rw1dw"><!--[-->`);
			const each_array = ensure_array_like(openGames());
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				let game = each_array[i];
				$$renderer.push(`<li class="svelte-6rw1dw">Open game ${escape_html(i + 1)} <form method="POST" action="?/join"><input type="hidden" name="id"${attr("value", game._id)}/> <button type="submit">Join</button></form></li>`);
			}
			$$renderer.push(`<!--]--></ul>`);
		}
		$$renderer.push(`<!--]--></section> <section class="svelte-6rw1dw"><h2>Your games</h2> `);
		if (myGames().length === 0) $$renderer.push(`<!--[0--><p>You're not in any games yet.</p>`);
		else {
			$$renderer.push(`<!--[-1--><ul class="svelte-6rw1dw"><!--[-->`);
			const each_array_1 = ensure_array_like(myGames());
			for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
				let game = each_array_1[i];
				$$renderer.push(`<li class="svelte-6rw1dw"><a${attr("href", `/games/${stringify(game._id)}`)}>Your game ${escape_html(i + 1)} — ${escape_html(gameLabel(game))}</a></li>`);
			}
			$$renderer.push(`<!--]--></ul>`);
		}
		$$renderer.push(`<!--]--></section></main>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map