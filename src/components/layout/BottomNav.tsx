import type { AppPage } from '../../types';
import styles from './BottomNav.module.css';

interface NavItem {
  page: AppPage;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { page: 'home', label: '首頁', icon: '🏠' },
  { page: 'learn', label: '學習', icon: '📖' },
  { page: 'quiz', label: '測驗', icon: '✏️' },
  { page: 'progress', label: '進度', icon: '📊' },
];

interface Props {
  current: AppPage;
  onNavigate: (page: AppPage) => void;
}

export function BottomNav({ current, onNavigate }: Props) {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map(({ page, label, icon }) => (
        <button
          key={page}
          className={`${styles.item} ${current === page ? styles.active : ''}`}
          onClick={() => onNavigate(page)}
          aria-label={label}
          aria-current={current === page ? 'page' : undefined}
        >
          <span className={styles.icon}>{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
