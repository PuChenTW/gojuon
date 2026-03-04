import styles from './KanaCell.module.css';

interface Props {
  kana: string;
  romaji: string;
  reps: number;  // 0=unlearned, 1=learning, 2=familiar, 3=learned, 4+=mastered
}

export function KanaCell({ kana, romaji, reps }: Props) {
  const level = Math.min(reps, 4);
  return (
    <div
      className={`${styles.cell} ${styles[`level-${level}`]}`}
      title={`${kana} (${romaji}) — ${getLevelLabel(level)}`}
    >
      <span className={styles.kana}>{kana}</span>
      <span className={styles.romaji}>{romaji}</span>
    </div>
  );
}

function getLevelLabel(level: number): string {
  switch (level) {
    case 0: return '未學習';
    case 1: return '學習中';
    case 2: return '熟悉中';
    case 3: return '已掌握';
    case 4: return '精通';
    default: return '';
  }
}
