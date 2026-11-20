// Figure out who is logged in, on every request
import { API_URL } from '$lib/server/api.js';

export async function handle({ event, resolve }) {
  const sessionId = event.cookies.get('sessionId');
  event.locals.user = null;
  
  if (sessionId) {
    // ask the API who owns this session, forwarding the cookie
    const res = await fetch(`${API_URL}/api/auth/me`, {
      headers: { cookie: `sessionId=${sessionId}` },
    });
    if (res.ok) {
      event.locals.user = await res.json();   // { _id, username }
      
      
    }
  }
 
  return resolve(event);
}