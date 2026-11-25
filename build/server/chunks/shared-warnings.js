//#region node_modules/@sveltejs/kit/src/messages/internal/shared.js
/**
* Whether shared errors include their full text on the server even though `DEV` is false. This is
* enabled while the app is being built (analysed or prerendered)
*/
var verbose = false;
function enable_verbose_errors() {
	verbose = true;
}
/**
* @typedef {{ element?: Element }} ClientWarningOptions
* - `element`: logged after the warning, so that it can be inspected in the browser's devtools
*/
/** `console.warn` styles for the code and text of shared runtime warnings, as in Svelte */
var bold = "font-weight: bold";
var normal = "font-weight: normal";
/**
* Throws the full diagnostic. Generated helpers throw their URL-only production error inline, so
* bundlers can remove both this call and the message text from production browser builds
* @param {string} code
* @param {string} message
* @param {Function} caller The generated helper, which is omitted from the stack along with this function
* @returns {never}
*/
function throw_error(code, message, caller) {
	const error = /* @__PURE__ */ new Error(`${code}\n${message}\nhttps://svelte.dev/e/kit/${code}`);
	error.name = "SvelteKit error";
	Error.captureStackTrace?.(error, caller);
	throw error;
}
//#endregion
//#region node_modules/@sveltejs/kit/src/messages/shared-warnings.js
/**
* `$app/environment` is deprecated, use `$app/env` instead
* @param {void} _values
*/
function app_environment_deprecated(_values) {
	console.warn("https://svelte.dev/e/kit/app_environment_deprecated");
}
/**
* `%route%`: Calling `depends('%dependency%')` will throw an error in Firefox because `%scheme%` is a special URI scheme
* @param {{ "route": string; "dependency": string; "scheme": string }} _values
*/
function depends_special_scheme(_values) {
	console.warn("https://svelte.dev/e/kit/depends_special_scheme");
}
/**
* `%module%` is deprecated, use `%replacement%` instead
* @param {{ "module": string; "replacement": string }} _values
*/
function env_module_deprecated(_values) {
	console.warn("https://svelte.dev/e/kit/env_module_deprecated");
}
/**
* Passing an `App.Error` body as the second argument is deprecated — pass the `message` as the second argument, and any additional properties as the third
* @param {void} _values
*/
function error_body_deprecated(_values) {
	console.warn("https://svelte.dev/e/kit/error_body_deprecated");
}
/**
* The properties of `form.fields` are virtual, so operators like `in` and `Object.keys` are meaningless. If you need the current value of a form field, use `form.fields.x.value()`
* @param {void} _values
*/
function form_fields_enumerated(_values) {
	console.warn("https://svelte.dev/e/kit/form_fields_enumerated");
}
//#endregion
export { form_fields_enumerated as a, normal as c, error_body_deprecated as i, throw_error as l, depends_special_scheme as n, bold as o, env_module_deprecated as r, enable_verbose_errors as s, app_environment_deprecated as t, verbose as u };

//# sourceMappingURL=shared-warnings.js.map