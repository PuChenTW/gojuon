import { useEffect, useState } from 'react';
import { openDatabase } from '../db/client';
import { seedCards } from '../db/repositories/cards.repo';
import { hiraganaCards } from '../data/hiragana';
import { katakanaCards } from '../data/katakana';

export function useDB() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function init() {
      try {
        await openDatabase();
        await seedCards([...hiraganaCards, ...katakanaCards]);
        setReady(true);
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        console.error('[useDB] Failed to initialise database:', error);
        setError(error);
      }
    }
    init();
  }, []);

  return { ready, error };
}
