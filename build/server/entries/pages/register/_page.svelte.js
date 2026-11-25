import { d as escape_html } from "../../../chunks/server2.js";
//#region src/routes/register/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { form } = $$props;
		$$renderer.push(`<main><h1>Create an account</h1> `);
		if (form?.error) $$renderer.push(`<!--[0--><p class="error svelte-52fghe">${escape_html(form.error)}</p>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <form method="POST" class="svelte-52fghe"><label class="svelte-52fghe">Username <input name="username" autocomplete="username" required=""/></label> <label class="svelte-52fghe">Password <input name="password" type="password" autocomplete="new-password" required=""/></label> <button type="submit">Register</button></form> <p>Already have an account? <a href="/login">Log in</a></p></main>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map