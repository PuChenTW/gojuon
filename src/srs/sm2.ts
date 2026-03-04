import type { ProgressRecord, ReviewQuality } from '../types';

const MIN_EASE_FACTOR = 1.3;

export function calculateNextReview(
  record: ProgressRecord,
  quality: ReviewQuality
): ProgressRecord {
  const { interval, easeFactor, reps, lapses } = record;

  if (quality < 3) {
    // Wrong answer: reset to beginning
    return {
      ...record,
      interval: 1,
      easeFactor: Math.max(MIN_EASE_FACTOR, easeFactor - 0.2),
      reps: 0,
      lapses: lapses + 1,
      nextReview: Date.now() + 1 * 24 * 60 * 60 * 1000,
    };
  }

  // Correct answer: update ease factor
  const newEF = Math.max(
    MIN_EASE_FACTOR,
    easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  );

  let newInterval: number;
  const newReps = reps + 1;

  if (newReps === 1) {
    newInterval = 1;
  } else if (newReps === 2) {
    newInterval = 6;
  } else {
    newInterval = Math.round(interval * newEF);
  }

  return {
    ...record,
    interval: newInterval,
    easeFactor: newEF,
    reps: newReps,
    nextReview: Date.now() + newInterval * 24 * 60 * 60 * 1000,
  };
}

// Convert answer correctness + response time to SM-2 quality score
export function answerToQuality(isCorrect: boolean, tookSeconds: number): ReviewQuality {
  if (!isCorrect) return 1;
  if (tookSeconds < 3) return 5;
  if (tookSeconds < 8) return 4;
  return 3;
}

export function defaultProgress(cardId: string): ProgressRecord {
  return {
    cardId,
    interval: 1,
    easeFactor: 2.5,
    nextReview: Date.now(),
    reps: 0,
    lapses: 0,
  };
}
