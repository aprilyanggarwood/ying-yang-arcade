// Base URL of the Hono API (server-only)
export const API_URL = process.env.API_URL ?? 'http://localhost:3000';

// call the API, forwarding the caller's session cookie.
// retries once if the API is cold-starting (fetch fails / connection refused).
export async function apiFetch(path, cookies, options = {}) {
  const sessionId = cookies.get('sessionId');
  const doFetch = () => fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...(options.headers ?? {}),
      ...(sessionId ? { cookie: `sessionId=${sessionId}` } : {}),
    },
  });
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await doFetch();
    } catch {
      if (attempt === 2) throw new Error('API unavailable');
      await new Promise((r) => setTimeout(r, 5000));  // wait for cold start
    }
  }
}