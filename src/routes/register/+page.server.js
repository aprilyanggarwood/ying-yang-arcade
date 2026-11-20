import { fail, redirect } from '@sveltejs/kit';
import { API_URL } from '$lib/server/api.js';

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    // call the API's register endpoint
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    // if the API rejected it (e.g. 409 username taken), show the error
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return fail(res.status, { error: body.message ?? 'Registration failed' });
    }

    // the API set a session cookie in its response — forward it to the browser
    const setCookie = res.headers.get('set-cookie');
    if (setCookie) {
      // parse the sessionId value out of the API's Set-Cookie header
      const match = setCookie.match(/sessionId=([^;]+)/);
      if (match) {
        cookies.set('sessionId', match[1], {
          path: '/', httpOnly: true, sameSite: 'lax', maxAge: 60 * 60 * 24 * 7,
        });
      }
    }

    // success -> go home (now logged in)
    throw redirect(303, '/');
  },
};