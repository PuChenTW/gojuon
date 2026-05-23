import type { Word } from '../../types';
import styles from './Card.module.css';

interface Props {
  kana: string;
  word: Word | undefined;
}

export function CardFront({ kana, word }: Props) {
  return (
    <div className={styles.front}>
      <span className={styles.kana} data-testid="card-kana">{kana}</span>
      {word && (
        <div className={styles.wordBlockFront}>
          <span className={styles.wordKanaFront}>{word.word}</span>
          <span className={styles.wordMeaningFront}>{word.meaning}</span>
        </div>
      )}
    </div>
  );
}
