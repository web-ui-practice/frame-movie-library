import { useEffect, useState } from 'react';

const STORAGE_KEY = 'frame-watchlist';

// Read saved movie ids from localStorage once, when the app starts
function loadWatchlist(): number[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = saved ? JSON.parse(saved) : [];

    // Keep only numbers, in case the stored value was broken or edited by hand
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'number') : [];
  } catch {
    return [];
  }
}

export function useWatchlist() {
  // Lazy initial state: loadWatchlist runs only on the first render
  const [watchlistIds, setWatchlistIds] = useState<number[]>(loadWatchlist);

  // Save to localStorage every time the list changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlistIds));
    } catch {
      // Storage can be unavailable (private mode, full quota) — the app still works without it
    }
  }, [watchlistIds]);

  function isInWatchlist(movieId: number) {
    return watchlistIds.includes(movieId);
  }

  function toggleWatchlist(movieId: number) {
    setWatchlistIds((ids) =>
      ids.includes(movieId) ? ids.filter((id) => id !== movieId) : [...ids, movieId],
    );
  }

  return { watchlistIds, isInWatchlist, toggleWatchlist };
}
