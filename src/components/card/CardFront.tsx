import type { Word } from '../../types';
import styles from './Card.module.css';

interface Props {
  kana: string;
  words: Word[];
}

export function CardFront({ kana, words }: Props) {
  const word = words[0];
  return (
    <div className={styles.front}>
      <span className={styles.kana}>{kana}</span>
      {word && (
        <div className={styles.wordBlockFront}>
          <span className={styles.wordKanaFront}>{word.word}</span>
          <span className={styles.wordMeaningFront}>{word.meaning}</span>
        </div>
      )}
    </div>
  );
}
