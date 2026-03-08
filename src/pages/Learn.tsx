import { useState, useRef } from 'react';
import type { KanaCard } from '../types';
import { PageShell } from '../components/layout/PageShell';
import { FlipCard } from '../components/card/FlipCard';
import { useProgress } from '../hooks/useProgress';
import { answerToQuality } from '../srs/sm2';
import styles from './Learn.module.css';

interface Props {
  cards: KanaCard[];
  onFinish: () => void;
  index: number;
  onIndexChange: (i: number) => void;
}

export function Learn({ cards, onFinish, index, onIndexChange }: Props) {
  const [flipped, setFlipped] = useState(false);
  const [key, setKey] = useState(0); // Force FlipCard remount on next card
  const startTimeRef = useRef(Date.now());
  const { submitReview } = useProgress();

  if (cards.length === 0) {
    return (
      <PageShell title="フラッシュカード">
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🎉</span>
          <p className={styles.doneText}>今日の学習は完了！</p>
          <p>また明日復習しましょう</p>
        </div>
      </PageShell>
    );
  }

  const card = cards[index];

  async function handleAnswer(isCorrect: boolean) {
    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    const quality = answerToQuality(isCorrect, elapsed);
    await submitReview(card.id, quality);

    if (index + 1 >= cards.length) {
      onFinish();
    } else {
      onIndexChange(index + 1);
      setFlipped(false);
      setKey((k) => k + 1);
      startTimeRef.current = Date.now();
    }
  }

  return (
    <PageShell title="フラッシュカード">
      <div className={styles.container}>
        <span className={styles.counter}>
          {index + 1} / {cards.length}
        </span>

        <div className={styles.cardArea}>
          <FlipCard
            key={key}
            card={card}
            onFlipped={() => setFlipped(true)}
          />
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.actionBtn} ${styles.btnWrong}`}
            onClick={() => handleAnswer(false)}
            disabled={!flipped}
          >
            ✗ 覚えていない
          </button>
          <button
            className={`${styles.actionBtn} ${styles.btnCorrect}`}
            onClick={() => handleAnswer(true)}
            disabled={!flipped}
          >
            ✓ 覚えた
          </button>
        </div>
      </div>
    </PageShell>
  );
}
