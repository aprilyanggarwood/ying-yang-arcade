import { browser } from '$app/environment';

const BEST_KEY = 'arcade2048-best';

export const gameStats = $state({ best: 0 });

export function recordScore(newScore) {
  if (newScore > gameStats.best) {
    gameStats.best = newScore;
    if (browser) {
      localStorage.setItem(BEST_KEY, String(gameStats.best));
    }
  }
}

// called from the page on mount (client-side) to restore the saved best
export function loadBest() {
  const saved = localStorage.getItem(BEST_KEY);
  if (saved !== null) {
    gameStats.best = Number(saved);
  }
}