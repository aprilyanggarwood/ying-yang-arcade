// make the logged-in user available to every page
export function load({ locals }) {
  return { user: locals.user };
}