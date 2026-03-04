import { useEffect, useState } from 'react';
import { openDatabase } from '../db/client';
import { countCards, seedCards } from '../db/repositories/cards.repo';
import { hiraganaCards } from '../data/hiragana';

export function useDB() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function init() {
      try {
        await openDatabase();
        const count = await countCards();
        if (count === 0) {
          await seedCards(hiraganaCards);
        }
        setReady(true);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      }
    }
    init();
  }, []);

  return { ready, error };
}
