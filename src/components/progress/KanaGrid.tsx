import type { KanaCard, ProgressRecord } from '../../types';
import { hiraganaRows } from '../../data/hiragana';
import { KanaCell } from './KanaCell';
import styles from './KanaGrid.module.css';

interface Props {
  cards: KanaCard[];
  progressMap: Map<string, ProgressRecord>;
}

const LEGEND = [
  { level: 0, color: 'var(--color-mastery-0)', label: '未學習' },
  { level: 1, color: 'var(--color-mastery-1)', label: '學習中' },
  { level: 2, color: 'var(--color-mastery-2)', label: '熟悉中' },
  { level: 3, color: 'var(--color-mastery-3)', label: '已掌握' },
  { level: 4, color: 'var(--color-mastery-4)', label: '精通' },
];

export function KanaGrid({ cards, progressMap }: Props) {
  const cardsByRow = hiraganaRows.map((row) => ({
    row,
    cards: cards.filter((c) => c.row === row),
  }));

  return (
    <div className={styles.grid}>
      {cardsByRow.map(({ row, cards: rowCards }) => (
        rowCards.length > 0 && (
          <div key={row} className={styles.row}>
            <span className={styles.rowLabel}>{row}</span>
            <div className={styles.cells}>
              {rowCards.map((card) => {
                const progress = progressMap.get(card.id);
                return (
                  <KanaCell
                    key={card.id}
                    kana={card.kana}
                    romaji={card.romaji}
                    reps={progress?.reps ?? 0}
                  />
                );
              })}
            </div>
          </div>
        )
      ))}
      <div className={styles.legend}>
        {LEGEND.map(({ level, color, label }) => (
          <div key={level} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: color }} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
