import { useState } from 'react';
import styles from './MultipleChoice.module.css';

interface Props {
  kana: string;
  correctAnswer: string;
  options: string[];  // 4 romaji options
  onAnswer: (isCorrect: boolean) => void;
}

export function MultipleChoice({ kana, correctAnswer, options, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(option: string) {
    if (selected !== null) return;
    setSelected(option);
    setTimeout(() => onAnswer(option === correctAnswer), 800);
  }

  function getOptionClass(option: string) {
    if (selected === null) return styles.option;
    if (option === correctAnswer) return `${styles.option} ${styles.correct}`;
    if (option === selected) return `${styles.option} ${styles.incorrect}`;
    return styles.option;
  }

  return (
    <div className={styles.container}>
      <div className={styles.prompt}>{kana}</div>
      <div className={styles.options}>
        {options.map((option) => (
          <button
            key={option}
            className={getOptionClass(option)}
            onClick={() => handleSelect(option)}
            disabled={selected !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
