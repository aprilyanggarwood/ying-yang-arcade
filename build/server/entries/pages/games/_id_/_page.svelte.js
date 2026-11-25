import { d as escape_html, i as ensure_array_like, l as attr, r as derived, s as stringify, t as attr_class } from "../../../../chunks/server2.js";
import { t as page } from "../../../../chunks/state.js";
//#region src/routes/games/[id]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data, form } = $$props;
		let user = derived(() => page.data.user);
		let game = derived(() => data.game);
		let iAmP1 = derived(() => String(game().player1) === String(user()?._id));
		let myBoard = derived(() => iAmP1() ? game().board1 : game().board2);
		let oppBoard = derived(() => iAmP1() ? game().board2 : game().board1);
		let myTurn = derived(() => String(game().turn) === String(user()?._id));
		let statusText = derived(() => game().status === "waiting" ? "Waiting for an opponent to join…" : game().status === "complete" ? String(game().winner) === String(user()?._id) ? "You win! 🎉" : "You lost." : myTurn() ? "Your turn — fire at the enemy board." : "Opponent's turn…");
		let lastShot = derived(() => form?.ok && oppBoard() ? oppBoard()[form.row][form.col] : null);
		let lastShotText = derived(() => lastShot() === "hit" ? "Hit! 🎯" : lastShot() === "miss" ? "Miss. 🌊" : null);
		$$renderer.push(`<main><h1>Battleship</h1> `);
		if (lastShotText()) $$renderer.push(`<!--[0--><p class="shot-result svelte-1rbh77g">${escape_html(lastShotText())}</p>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <p class="status">${escape_html(statusText())}</p> `);
		if (form?.error) $$renderer.push(`<!--[0--><p class="error">${escape_html(form.error)}</p>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="boards svelte-1rbh77g"><section><h2>Your fleet</h2> <div class="grid svelte-1rbh77g"><!--[-->`);
		const each_array = ensure_array_like(myBoard());
		for (let r = 0, $$length = each_array.length; r < $$length; r++) {
			let row = each_array[r];
			$$renderer.push(`<!--[-->`);
			const each_array_1 = ensure_array_like(row);
			for (let c = 0, $$length = each_array_1.length; c < $$length; c++) {
				let cell = each_array_1[c];
				$$renderer.push(`<div${attr_class(`cell ${stringify(cell)}`, "svelte-1rbh77g")}${attr("aria-label", `your row ${stringify(r + 1)}, column ${stringify(c + 1)}: ${stringify(cell)}`)}>`);
				if (cell === "hit") $$renderer.push(`<!--[0-->●`);
				else if (cell === "miss") $$renderer.push(`<!--[1-->✕`);
				else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div>`);
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></div></section> <section><h2>Enemy waters</h2> <div class="grid svelte-1rbh77g"><!--[-->`);
		const each_array_2 = ensure_array_like(oppBoard());
		for (let r = 0, $$length = each_array_2.length; r < $$length; r++) {
			let row = each_array_2[r];
			$$renderer.push(`<!--[-->`);
			const each_array_3 = ensure_array_like(row);
			for (let c = 0, $$length = each_array_3.length; c < $$length; c++) {
				let cell = each_array_3[c];
				if (myTurn() && game().status === "active" && cell !== "hit" && cell !== "miss") $$renderer.push(`<!--[0--><form method="POST" action="?/shoot" class="cell-form svelte-1rbh77g"><input type="hidden" name="row"${attr("value", r)}/> <input type="hidden" name="col"${attr("value", c)}/> <button type="submit"${attr_class(`cell ${stringify(cell)}`, "svelte-1rbh77g")}${attr("aria-label", `Fire at enemy row ${stringify(r + 1)}, column ${stringify(c + 1)}`)}></button></form>`);
				else {
					$$renderer.push(`<!--[-1--><div${attr_class(`cell ${stringify(cell)}`, "svelte-1rbh77g")}${attr("aria-label", `enemy row ${stringify(r + 1)}, column ${stringify(c + 1)}: ${stringify(cell)}`)}>`);
					if (cell === "hit") $$renderer.push(`<!--[0-->●`);
					else if (cell === "miss") $$renderer.push(`<!--[1-->✕`);
					else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></div></section></div> <p><a href="/games">← Back to lobby</a></p></main>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map