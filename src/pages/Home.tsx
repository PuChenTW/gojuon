import type { AppPage, KanaCard } from '../types';
import { PageShell } from '../components/layout/PageShell';
import styles from './Home.module.css';

interface Props {
  dueCards: KanaCard[];
  totalCards: number;
  onNavigate: (page: AppPage) => void;
}

export function Home({ dueCards, totalCards, onNavigate }: Props) {
  const masteredCount = totalCards - dueCards.length;

  return (
    <PageShell title="ごじゅうおん">
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{dueCards.length}</span>
          <span className={styles.statLabel}>今日の復習</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{masteredCount}</span>
          <span className={styles.statLabel}>習得済み</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{totalCards}</span>
          <span className={styles.statLabel}>合計音節</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>
            {totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0}%
          </span>
          <span className={styles.statLabel}>達成率</span>
        </div>
      </div>

      <div className={styles.modes}>
        <button className={styles.modeBtn} onClick={() => onNavigate('learn')}>
          <span className={styles.modeIcon}>📖</span>
          <div className={styles.modeInfo}>
            <span className={styles.modeName}>フラッシュカード</span>
            <span className={styles.modeDesc}>カードをタップして覚える</span>
          </div>
          {dueCards.length > 0 && (
            <span className={styles.dueBadge}>{dueCards.length}</span>
          )}
        </button>

        <button className={styles.modeBtn} onClick={() => onNavigate('quiz')}>
          <span className={styles.modeIcon}>✏️</span>
          <div className={styles.modeInfo}>
            <span className={styles.modeName}>クイズ</span>
            <span className={styles.modeDesc}>選択問題 + 記述問題</span>
          </div>
          {dueCards.length > 0 && (
            <span className={styles.dueBadge}>{dueCards.length}</span>
          )}
        </button>

        <button className={styles.modeBtn} onClick={() => onNavigate('progress')}>
          <span className={styles.modeIcon}>📊</span>
          <div className={styles.modeInfo}>
            <span className={styles.modeName}>進捗確認</span>
            <span className={styles.modeDesc}>50音の習得状況</span>
          </div>
        </button>
      </div>
    </PageShell>
  );
}
