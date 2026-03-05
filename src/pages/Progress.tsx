import { useState, useEffect } from 'react';
import type { KanaCard, ProgressRecord } from '../types';
import { PageShell } from '../components/layout/PageShell';
import { KanaGrid } from '../components/progress/KanaGrid';
import { getAllProgress } from '../db/repositories/progress.repo';
import { getAllCards } from '../db/repositories/cards.repo';
import styles from './Progress.module.css';

export function Progress() {
  const [cards, setCards] = useState<KanaCard[]>([]);
  const [progressMap, setProgressMap] = useState<Map<string, ProgressRecord>>(new Map());
  const [type, setType] = useState<'hiragana' | 'katakana'>('hiragana');

  useEffect(() => {
    async function load() {
      const [allCards, allProgress] = await Promise.all([getAllCards(), getAllProgress()]);
      setCards(allCards);
      setProgressMap(new Map(allProgress.map((p) => [p.cardId, p])));
    }
    load();
  }, []);

  const filteredCards = cards.filter((c) => c.type === type);
  const learned = filteredCards.filter((c) => (progressMap.get(c.id)?.reps ?? 0) >= 3).length;
  const mastered = filteredCards.filter((c) => (progressMap.get(c.id)?.reps ?? 0) >= 4).length;

  return (
    <PageShell title="進捗">
      <div className={styles.summary}>
        <div className={styles.summaryCard}>
          <span className={styles.summaryValue}>{filteredCards.length}</span>
          <span className={styles.summaryLabel}>合計</span>
        </div>
        <div className={styles.summaryCard}>
          <span className={styles.summaryValue}>{learned}</span>
          <span className={styles.summaryLabel}>習得済み</span>
        </div>
        <div className={styles.summaryCard}>
          <span className={styles.summaryValue}>{mastered}</span>
          <span className={styles.summaryLabel}>精通</span>
        </div>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${type === 'hiragana' ? styles.activeTab : ''}`}
          onClick={() => setType('hiragana')}
        >
          平仮名
        </button>
        <button
          className={`${styles.tab} ${type === 'katakana' ? styles.activeTab : ''}`}
          onClick={() => setType('katakana')}
        >
          片仮名
        </button>
      </div>

      <KanaGrid cards={filteredCards} progressMap={progressMap} type={type} />
    </PageShell>
  );
}
