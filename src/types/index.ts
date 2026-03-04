export interface Word {
  word: string;
  reading: string;
  meaning: string;
}

export interface KanaCard {
  id: string;
  kana: string;
  romaji: string;
  row: string;
  words: Word[];
}

export interface ProgressRecord {
  cardId: string;
  interval: number;
  easeFactor: number;
  nextReview: number;
  reps: number;
  lapses: number;
}

export interface SessionRecord {
  id?: number;
  date: string;
  correct: number;
  incorrect: number;
  duration: number;
}

export type ReviewQuality = 0 | 1 | 2 | 3 | 4 | 5;

export type AppPage = 'home' | 'learn' | 'quiz' | 'progress';
