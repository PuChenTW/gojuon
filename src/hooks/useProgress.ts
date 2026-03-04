import { useCallback } from 'react';
import type { ReviewQuality } from '../types';
import { getProgress, upsertProgress } from '../db/repositories/progress.repo';
import { calculateNextReview, defaultProgress } from '../srs/sm2';

export function useProgress() {
  const submitReview = useCallback(
    async (cardId: string, quality: ReviewQuality) => {
      const existing = await getProgress(cardId);
      const record = existing ?? defaultProgress(cardId);
      const updated = calculateNextReview(record, quality);
      await upsertProgress(updated);
      return updated;
    },
    []
  );

  return { submitReview };
}
