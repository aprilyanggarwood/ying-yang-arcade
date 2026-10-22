// shared, reactive state that lives OUTSIDE any component
export const gameStats = $state({ best: 0 });

// update the best score if the new score beats it
export function recordScore(newScore) {
  if (newScore > gameStats.best) {
    gameStats.best = newScore; 
  }
}