import type { Word } from '../../types';
import styles from './Card.module.css';

interface Props {
  romaji: string;
  words: Word[];
}

export function CardBack({ romaji, words }: Props) {
  const word = words[0];
  return (
    <div className={styles.back}>
      <span className={styles.romaji}>{romaji}</span>
      {word && (
        <div className={styles.wordBlock}>
          <span className={styles.wordKana}>{word.word}</span>
          <span className={styles.wordReading}>{word.reading}</span>
          <span className={styles.wordMeaning}>{word.meaning}</span>
        </div>
      )}
    </div>
  );
}
