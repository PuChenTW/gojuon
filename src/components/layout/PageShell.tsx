import styles from './PageShell.module.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

export function PageShell({ title, children }: Props) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
