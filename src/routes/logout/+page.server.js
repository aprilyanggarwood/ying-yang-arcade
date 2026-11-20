import { redirect } from '@sveltejs/kit';
import { API_URL } from '$lib/server/api.js';

export const actions = {
  default: async ({ cookies }) => {
    const sessionId = cookies.get('sessionId');
    if (sessionId) {
      await fetch(`${API_URL}/api/auth/logout`, {
        method: 'POST',
        headers: { cookie: `sessionId=${sessionId}` },
      });
      cookies.delete('sessionId', { path: '/' });   // clear it in the browser too
    }
    throw redirect(303, '/');
  },
};