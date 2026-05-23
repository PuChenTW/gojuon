import type { Word } from '../../types';
import styles from './Card.module.css';

interface Props {
  romaji: string;
  word: Word | undefined;
}

export function CardBack({ romaji, word }: Props) {
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
