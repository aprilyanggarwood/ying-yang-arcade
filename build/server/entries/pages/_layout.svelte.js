import { d as escape_html, i as ensure_array_like, l as attr, r as derived } from "../../chunks/server2.js";
import { t as page } from "../../chunks/state.js";
//#region src/lib/components/Nav.svelte
function Nav($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let user = derived(() => page.data.user);
		const links = [
			{
				href: "/",
				label: "Home"
			},
			{
				href: "/crossword",
				label: "Crossword"
			},
			{
				href: "/2048",
				label: "2048"
			},
			{
				href: "/games",
				label: "Battleship"
			},
			{
				href: "/about",
				label: "About"
			},
			{
				href: "/contact",
				label: "Contact"
			}
		];
		$$renderer.push(`<header class="site-header svelte-1h32yp1"><nav class="nav-inner svelte-1h32yp1" aria-label="Main navigation"><a class="brand svelte-1h32yp1" href="/">April's Game Parlor</a> <ul class="nav-list svelte-1h32yp1"><!--[-->`);
		const each_array = ensure_array_like(links);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let link = each_array[$$index];
			$$renderer.push(`<li><a${attr("href", link.href)}${attr("aria-current", page.url.pathname === link.href ? "page" : void 0)} class="svelte-1h32yp1">${escape_html(link.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--> `);
		if (user()) $$renderer.push(`<!--[0--><li class="nav-user svelte-1h32yp1"><span class="username svelte-1h32yp1">${escape_html(user().username)}</span> <form method="POST" action="/logout" class="svelte-1h32yp1"><button type="submit" class="svelte-1h32yp1">Log out</button></form></li>`);
		else $$renderer.push(`<!--[-1--><li class="nav-auth svelte-1h32yp1"><a class="auth-link svelte-1h32yp1" href="/login"${attr("aria-current", page.url.pathname === "/login" ? "page" : void 0)}>Log in</a> <a class="auth-link svelte-1h32yp1" href="/register"${attr("aria-current", page.url.pathname === "/register" ? "page" : void 0)}>Register</a></li>`);
		$$renderer.push(`<!--]--></ul></nav></header>`);
	});
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer) {
	$$renderer.push(`<footer class="site-footer svelte-jz8lnl"><div class="footer-inner svelte-jz8lnl"><p class="copyright svelte-jz8lnl">© 2026 April Yang</p> <ul class="social svelte-jz8lnl"><li><a href="https://github.com/aprilyanggarwood" target="_blank" rel="noopener" class="svelte-jz8lnl">GitHub</a></li> <li><a href="https://www.linkedin.com/in/ying-april-yang-a9bb8720/" target="_blank" rel="noopener" class="svelte-jz8lnl">LinkedIn</a></li></ul></div></footer>`);
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	Nav($$renderer, {});
	$$renderer.push(`<!----> `);
	children($$renderer);
	$$renderer.push(`<!----> `);
	Footer($$renderer, {});
	$$renderer.push(`<!---->`);
}
//#endregion
export { _layout as default };

//# sourceMappingURL=_layout.svelte.js.map