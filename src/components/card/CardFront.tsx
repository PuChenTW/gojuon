import styles from './Card.module.css';

interface Props {
  kana: string;
}

export function CardFront({ kana }: Props) {
  return (
    <div className={styles.front}>
      <span className={styles.kana}>{kana}</span>
      <span className={styles.hint}>タップして答えを見る</span>
    </div>
  );
}
