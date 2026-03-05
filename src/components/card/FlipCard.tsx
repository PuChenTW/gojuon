import { useState } from 'react';
import type { KanaCard } from '../../types';
import { CardFront } from './CardFront';
import { CardBack } from './CardBack';
import '../../styles/flip.css';

interface Props {
  card: KanaCard;
  onFlipped?: () => void;
}

export function FlipCard({ card, onFlipped }: Props) {
  const [flipped, setFlipped] = useState(false);

  function handleFlip() {
    if (!flipped) {
      setFlipped(true);
      onFlipped?.();
    }
  }

  return (
    <div
      className="flip-container"
      onClick={handleFlip}
      role="button"
      aria-label={`Flash card for ${card.kana}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? handleFlip() : undefined}
    >
      <div className={`flip-inner ${flipped ? 'is-flipped' : ''}`}>
        <div className="flip-face flip-face--front">
          <CardFront kana={card.kana} words={card.words} />
        </div>
        <div className="flip-face flip-face--back">
          <CardBack romaji={card.romaji} words={card.words} />
        </div>
      </div>
    </div>
  );
}
