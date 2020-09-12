import React, { useState, useEffect } from 'react';
import { Container } from './styles';

interface ICard {
  question: string;
  valuation: 'bom' | 'regular' | 'ruim';
}

interface IUsedCardsProps {
  handleReuseCard: (question: string, valuation: string, index: number) => void;
  usedCards: ICard[];
}

const UsedCards: React.FC<IUsedCardsProps> = ({ handleReuseCard, usedCards }) => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    setCards(usedCards);
  }, [usedCards]);

  return (
    <Container>
      {cards && cards.map(card => (
        <div
          key={cards.findIndex((usedCard) => usedCard.question === card.question)}
          onClick={() => handleReuseCard(card.question, card.valuation, cards.findIndex((usedCard) => usedCard.question === card.question))}
        >
          {card.question}
          <span>{card.valuation}</span>
        </div>
      ))}
    </Container>
  );
}

export default UsedCards;
