import { d as escape_html } from "../../../chunks/server2.js";
//#region src/routes/login/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { form } = $$props;
		$$renderer.push(`<main><h1>Log in</h1> `);
		if (form?.error) $$renderer.push(`<!--[0--><p class="error svelte-1x05zx6">${escape_html(form.error)}</p>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <form method="POST" class="svelte-1x05zx6"><label class="svelte-1x05zx6">Username <input name="username" autocomplete="username" required=""/></label> <label class="svelte-1x05zx6">Password <input name="password" type="password" autocomplete="current-password" required=""/></label> <button type="submit">Log in</button></form> <p>No account? <a href="/register">Register</a></p></main>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map