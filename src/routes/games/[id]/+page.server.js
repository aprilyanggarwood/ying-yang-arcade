import { redirect, fail, error } from '@sveltejs/kit';
import { apiFetch } from '$lib/server/api.js';

export async function load({ params, locals, cookies }) {
  if (!locals.user) {
    throw redirect(303, '/login');
  }

  const res = await apiFetch(`/api/games/${params.id}`, cookies);
  if (res.status === 404) throw error(404, 'Game not found');
  if (res.status === 403) throw error(403, 'You are not in this game');
  if (!res.ok) throw error(res.status, 'Could not load game');

  const game = await res.json();   // already censored by the API for this viewer
  return { game };
}

export const actions = {
  // fire a shot at the opponent's board,
  // return the result (hit/miss) and the updated game state
  shoot: async ({ params, cookies, request }) => {
  const data = await request.formData();
  const row = Number(data.get('row'));
  const col = Number(data.get('col'));

  const res = await apiFetch(`/api/games/${params.id}/shots`, cookies, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ row, col }),
    });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    return fail(res.status, { error: body.message ?? 'Shot failed' });
    }

  // read the updated game to find out what that cell became
  const updated = await res.json();
  const iAmP1 = String(updated.player1) === String(/* the current user */ undefined);
  // we actually know who fired: the shooter is the logged-in user.
  // the shot landed on the OPPONENT's board.
  return { ok: true, row, col };   // we'll resolve hit/miss on the page from the fresh board
    },
};