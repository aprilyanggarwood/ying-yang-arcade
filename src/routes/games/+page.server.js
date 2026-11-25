import { redirect, fail } from '@sveltejs/kit';
import { apiFetch } from '$lib/server/api.js';

// load the list of games for this user
export async function load({ locals, cookies }) {
  // must be logged in to see the lobby
  if (!locals.user) {
    throw redirect(303, '/login');
  }

  const res = await apiFetch('/api/games', cookies);
  const games = res.ok ? await res.json() : [];
  return { games };
}

export const actions = {
  // create a new game -> go to its board
  create: async ({ cookies }) => {
    const res = await apiFetch('/api/games', cookies, { method: 'POST' });
    if (!res.ok) {
      return fail(res.status, { error: 'Could not create game' });
    }
    const game = await res.json();
    throw redirect(303, `/games/${game._id}`);
  },

  // join an existing game -> go to its board
  join: async ({ cookies, request }) => {
    const data = await request.formData();
    const id = data.get('id');
    const res = await apiFetch(`/api/games/${id}/join`, cookies, { method: 'POST' });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return fail(res.status, { error: body.message ?? 'Could not join game' });
    }
    throw redirect(303, `/games/${id}`);
  },
};