import "../../../chunks/shared-warnings.js";
import { d as escape_html, i as ensure_array_like, l as attr, n as attr_style, r as derived, s as stringify, t as attr_class } from "../../../chunks/server2.js";
import "../../../chunks/index-server.js";
import { canMove, hasMoves, move, score, spawn } from "@april-cs-npm/arcade-core";
var gameStats = { best: 0 };
function recordScore(newScore) {
	if (newScore > gameStats.best) gameStats.best = newScore;
}
//#endregion
//#region src/lib/components/Score.svelte
function Score($$renderer, $$props) {
	let { current, best } = $$props;
	$$renderer.push(`<div class="score svelte-18gpfw6"><p class="svelte-18gpfw6">Score: ${escape_html(current)}</p> <p class="svelte-18gpfw6">Best: ${escape_html(best)}</p></div>`);
}
//#endregion
//#region src/lib/components/NewGameButton.svelte
function NewGameButton($$renderer, $$props) {
	let { onNewGame } = $$props;
	$$renderer.push(`<button class="new-game svelte-1wx9ug0">New Game</button>`);
}
//#endregion
//#region src/lib/components/Tile.svelte
function Tile($$renderer, $$props) {
	let { value, row, column } = $$props;
	$$renderer.push(`<div${attr_class(`tile tile-${stringify(value)}`, "svelte-4lsiak")}${attr_style("", {
		"grid-row": row + 1,
		"grid-column": column + 1
	})}>${escape_html(value)}</div>`);
}
//#endregion
//#region src/lib/components/Board.svelte
function Board($$renderer, $$props) {
	let { tiles } = $$props;
	$$renderer.push(`<div class="board svelte-jpc25w"><!--[-->`);
	const each_array = ensure_array_like(tiles);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let tile = each_array[$$index];
		Tile($$renderer, {
			value: tile.value,
			row: tile.r,
			column: tile.c
		});
	}
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
//#region src/lib/components/TouchControls.svelte
function TouchControls($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { onMove } = $$props;
		$$renderer.push(`<div class="touch-controls svelte-1ag4cst" aria-label="On-screen game controls"><button class="arrow up svelte-1ag4cst" aria-label="Move up">↑</button> <div class="row svelte-1ag4cst"><button class="arrow svelte-1ag4cst" aria-label="Move left">←</button> <button class="arrow svelte-1ag4cst" aria-label="Move down">↓</button> <button class="arrow svelte-1ag4cst" aria-label="Move right">→</button></div></div>`);
	});
}
//#endregion
//#region src/routes/2048/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let rng = Math.random;
		let seedInput = "";
		function newBoard() {
			let b = [
				[
					0,
					0,
					0,
					0
				],
				[
					0,
					0,
					0,
					0
				],
				[
					0,
					0,
					0,
					0
				],
				[
					0,
					0,
					0,
					0
				]
			];
			b = spawn(b, rng);
			b = spawn(b, rng);
			return b;
		}
		let nextId = 0;
		function boardToTiles(grid) {
			const tiles = [];
			for (let r = 0; r < grid.length; r++) for (let c = 0; c < grid[r].length; c++) {
				const value = grid[r][c];
				if (value !== 0) tiles.push({
					id: nextId++,
					value,
					r,
					c
				});
			}
			return tiles;
		}
		let board = newBoard();
		let tiles = derived(() => boardToTiles(board));
		let currentScore = 0;
		let gameOver = derived(() => hasMoves(board) === false);
		let status = derived(() => gameOver() ? `Game over. Final score ${currentScore}.` : `Score ${currentScore}.`);
		function handleMove(direction) {
			if (!canMove(board, direction)) return;
			currentScore += score(board, direction);
			recordScore(currentScore);
			board = spawn(move(board, direction), rng);
		}
		function restart() {
			rng = Math.random;
			board = newBoard();
			currentScore = 0;
		}
		$$renderer.push(`<main><h1>2048</h1> `);
		Score($$renderer, {
			current: currentScore,
			best: gameStats.best
		});
		$$renderer.push(`<!----> <p class="sr-only" aria-live="polite">${escape_html(status())}</p> `);
		NewGameButton($$renderer, { onNewGame: restart });
		$$renderer.push(`<!----> <div class="seed-controls svelte-12zdomv"><label>Seed <input type="number"${attr("value", seedInput)} placeholder="e.g. 42" class="svelte-12zdomv"/></label> <button class="svelte-12zdomv">Start with seed</button></div> `);
		if (gameOver()) $$renderer.push(`<!--[0--><p>Game over!</p>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		Board($$renderer, { tiles: tiles() });
		$$renderer.push(`<!----> `);
		TouchControls($$renderer, { onMove: handleMove });
		$$renderer.push(`<!----></main>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map