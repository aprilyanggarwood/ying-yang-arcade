// Base URL of the Hono API (server-only)
import { env } from '$env/dynamic/private';

export const API_URL = env.API_URL ?? 'http://localhost:3000';
console.log('API_URL is:', API_URL);   // temporary

// call the API, forwarding the caller's session cookie
export async function apiFetch(path, cookies, options = {}) {
  const sessionId = cookies.get('sessionId');
  return fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...(options.headers ?? {}),
      ...(sessionId ? { cookie: `sessionId=${sessionId}` } : {}),
    },
  });
}