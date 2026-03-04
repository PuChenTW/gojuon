import { useState, useEffect, useCallback } from 'react';
import type { KanaCard } from '../types';
import { getDueCards } from '../db/repositories/progress.repo';
import { getAllCards } from '../db/repositories/cards.repo';
import { defaultProgress } from '../srs/sm2';
import { upsertProgress } from '../db/repositories/progress.repo';

export function useDueCards(dbReady: boolean) {
  const [dueCards, setDueCards] = useState<KanaCard[]>([]);
  const [loading, setLoading] = useState(true);

  const loadDueCards = useCallback(async () => {
    setLoading(true);
    try {
      const now = Date.now();
      const allCards = await getAllCards();
      const dueProgress = await getDueCards(now);
      const dueIds = new Set(dueProgress.map((p) => p.cardId));

      // Cards with no progress record are also due
      const cardsWithNoProgress = allCards.filter((c) => !dueIds.has(c.id));

      // Seed default progress for new cards so they appear in due list next time
      for (const card of cardsWithNoProgress) {
        await upsertProgress(defaultProgress(card.id));
        dueIds.add(card.id);
      }

      const due = allCards.filter((c) => dueIds.has(c.id));
      setDueCards(due);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (dbReady) {
      loadDueCards();
    }
  }, [dbReady, loadDueCards]);

  return { dueCards, loading, refresh: loadDueCards };
}
