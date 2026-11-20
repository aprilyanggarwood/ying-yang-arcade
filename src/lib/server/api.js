// Base URL of the Hono API (server-only)
import { env } from '$env/dynamic/private';

export const API_URL = env.API_URL ?? 'http://localhost:3000';