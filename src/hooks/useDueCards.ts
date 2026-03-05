import { useState, useEffect, useCallback } from 'react';
import type { KanaCard } from '../types';
import { getDueCards, getAllProgress, upsertProgress } from '../db/repositories/progress.repo';
import { getAllCards } from '../db/repositories/cards.repo';
import { defaultProgress } from '../srs/sm2';

export function useDueCards(dbReady: boolean) {
  const [dueCards, setDueCards] = useState<KanaCard[]>([]);
  const [loading, setLoading] = useState(true);

  const loadDueCards = useCallback(async () => {
    setLoading(true);
    try {
      const now = Date.now();
      const allCards = await getAllCards();
      const dueProgress = await getDueCards(now);
      const allProgress = await getAllProgress();

      const dueIds = new Set(dueProgress.map((p) => p.cardId));
      const hasProgressIds = new Set(allProgress.map((p) => p.cardId));

      // Only seed default progress for brand-new cards (no progress record at all)
      const brandNewCards = allCards.filter((c) => !hasProgressIds.has(c.id));
      for (const card of brandNewCards) {
        await upsertProgress(defaultProgress(card.id));
        dueIds.add(card.id);
      }

      const due = allCards.filter((c) => dueIds.has(c.id));
      setDueCards(due);
    } catch (err) {
      console.error('[useDueCards] Failed to load due cards:', err);
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
