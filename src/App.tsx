import { useState, useEffect } from 'react';
import type { AppPage, KanaCard } from './types';
import { useDB } from './hooks/useDB';
import { useDueCards } from './hooks/useDueCards';
import { getAllCards } from './db/repositories/cards.repo';
import { BottomNav } from './components/layout/BottomNav';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { Quiz } from './pages/Quiz';
import { Progress } from './pages/Progress';

export default function App() {
  const [page, setPage] = useState<AppPage>('home');
  const { ready, error } = useDB();
  const { dueCards, loading, refresh } = useDueCards(ready);
  const [allCards, setAllCards] = useState<KanaCard[]>([]);

  useEffect(() => {
    if (ready) {
      getAllCards().then(setAllCards);
    }
  }, [ready]);

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#C62828' }}>
        <p>データベースの初期化に失敗しました</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{error.message}</p>
      </div>
    );
  }

  if (!ready || loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <p style={{ color: '#666' }}>読み込み中…</p>
      </div>
    );
  }

  function handleFinish() {
    refresh();
    setPage('home');
  }

  function renderPage() {
    switch (page) {
      case 'home':
        return <Home dueCards={dueCards} totalCards={allCards.length} onNavigate={setPage} />;
      case 'learn':
        return <Learn cards={dueCards} onFinish={handleFinish} />;
      case 'quiz':
        return <Quiz cards={dueCards} allCards={allCards} onFinish={handleFinish} />;
      case 'progress':
        return <Progress />;
    }
  }

  return (
    <>
      {renderPage()}
      <BottomNav current={page} onNavigate={setPage} />
    </>
  );
}
