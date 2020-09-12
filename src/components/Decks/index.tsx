import React, { useCallback } from 'react';
import { DecksContainer, Deck, Card } from './styles';
import cardImg from '../../images/carta-bg.png';
import { useDecks } from '../../hooks/decksProvider';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

interface IDeckData {
  name: string;
  cards: Array<string>;
}

interface IDecks {
  handleCardChoice: (deckName: Omit<IDeckData, 'cards'>) => void;
}

const DecksComponent: React.FC<IDecks> = ({ handleCardChoice }) => {
  const { contextDecks, updateDecks } = useDecks();

  const handleMoveUp = useCallback((index: number, operation: string) => {
    let tempDecks = [...contextDecks];
    let selectedDeck = tempDecks[index];
    let DeckToSwap;
    if (operation === 'increase' && tempDecks[index + 1] !== undefined) {
      DeckToSwap = tempDecks[index + 1];
      tempDecks[index + 1] = selectedDeck;
    } else if (operation === 'decrease' && tempDecks[index - 1] !== undefined) {
      DeckToSwap = tempDecks[index - 1];
      tempDecks[index - 1] = selectedDeck;
    } else {
      return;
    }

    tempDecks[index] = DeckToSwap;

    updateDecks(tempDecks);
  }, [contextDecks, updateDecks]);

  return (
    <DecksContainer>
      {contextDecks && contextDecks.map((deck, index) => (
        <Deck key={deck.name}>
          <div>
            <p>{deck.cards.length} {deck.name} Restantes</p>
            <h2>{deck.name}</h2>
            <button onClick={() => handleMoveUp(index, 'increase')}> <FiArrowRight size={20} /> </button>
            <button onClick={() => handleMoveUp(index, 'decrease')}> <FiArrowLeft size={20} /> </button>
          </div>
          <Card onClick={() => handleCardChoice({ name: deck.name })}><img src={cardImg} alt="Card" /></Card>
        </Deck>
      ))}
    </DecksContainer>
  );
}

export default DecksComponent;
