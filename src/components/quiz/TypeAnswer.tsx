import { useState, useRef } from 'react';
import styles from './TypeAnswer.module.css';

interface Props {
  kana: string;
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

export function TypeAnswer({ kana, correctAnswer, onAnswer }: Props) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    if (result !== null || !value.trim()) return;
    const isCorrect = value.trim().toLowerCase() === correctAnswer.toLowerCase();
    setResult(isCorrect ? 'correct' : 'incorrect');
    setTimeout(() => onAnswer(isCorrect), 800);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') handleSubmit();
  }

  const inputClass = result
    ? `${styles.input} ${styles[result]}`
    : styles.input;

  return (
    <div className={styles.container}>
      <div className={styles.prompt}>{kana}</div>
      <div className={styles.inputRow}>
        <input
          ref={inputRef}
          className={inputClass}
          type="text"
          placeholder="romaji を入力…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={result !== null}
          autoFocus
          autoComplete="off"
          autoCapitalize="none"
        />
        <button
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={result !== null || !value.trim()}
        >
          確認
        </button>
      </div>
      {result === 'incorrect' && (
        <p className={styles.feedback}>正解: {correctAnswer}</p>
      )}
    </div>
  );
}
