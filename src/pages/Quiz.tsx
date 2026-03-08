import { useState, useRef, useEffect } from 'react';
import type { KanaCard } from '../types';
import { PageShell } from '../components/layout/PageShell';
import { MultipleChoice } from '../components/quiz/MultipleChoice';
import { TypeAnswer } from '../components/quiz/TypeAnswer';
import { useProgress } from '../hooks/useProgress';
import { answerToQuality } from '../srs/sm2';
import styles from './Quiz.module.css';

interface Props {
  cards: KanaCard[];
  allCards: KanaCard[];
  onFinish: () => void;
}

function buildOptions(cards: KanaCard[], allCards: KanaCard[], index: number): string[] {
  if (cards.length === 0) return [];
  const card = cards[index % cards.length];
  const others = allCards
    .filter((c) => c.id !== card.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((c) => c.romaji);
  return [card.romaji, ...others].sort(() => Math.random() - 0.5);
}

export function Quiz({ cards, allCards, onFinish }: Props) {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [questionKey, setQuestionKey] = useState(0);
  const [options, setOptions] = useState<string[]>(() => buildOptions(cards, allCards, 0));
  const startTimeRef = useRef(0);
  const { submitReview } = useProgress();

  // Alternate between multiple choice and type answer
  const isMultipleChoice = index % 2 === 0;

  // Reset timer whenever the card index changes
  useEffect(() => {
    startTimeRef.current = Date.now();
  }, [index]);

  if (cards.length === 0 || done) {
    return (
      <PageShell title="クイズ">
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🎉</span>
          <p className={styles.doneText}>クイズ完了！</p>
          {done && (
            <p className={styles.score}>
              {correct} / {cards.length} 正解
            </p>
          )}
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

    if (isCorrect) setCorrect((c) => c + 1);

    if (index + 1 >= cards.length) {
      setDone(true);
      setTimeout(onFinish, 2000);
    } else {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setOptions(buildOptions(cards, allCards, nextIndex));
      setQuestionKey((k) => k + 1);
    }
  }

  return (
    <PageShell title="クイズ">
      <div className={styles.container}>
        <span className={styles.counter}>
          {index + 1} / {cards.length}
        </span>
        <div className={styles.questionArea}>
          {isMultipleChoice ? (
            <MultipleChoice
              key={questionKey}
              kana={card.kana}
              correctAnswer={card.romaji}
              options={options}
              onAnswer={handleAnswer}
            />
          ) : (
            <TypeAnswer
              key={questionKey}
              kana={card.kana}
              correctAnswer={card.romaji}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </div>
    </PageShell>
  );
}
