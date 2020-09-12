import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import api from '../services/api';

interface ICardObject {
  id: string;
  fields: {
    Pergunta: string;
    Fase: string;
    Elemento: string;
  }
}

interface IAirTableResponseData {
  data: {
    records: Array<ICardObject>;
  }
}

interface IDecksContext {
  updateDeck: (updatedDeck: ICardObject[]) => void;
  contextDeck: ICardObject[];
  gameLevels: Array<string>;
}

const DecksContext = createContext<IDecksContext>({} as IDecksContext);

const DeckProvider: React.FC = ({ children }) => {
  const [deck, setDeck] = useState<ICardObject[]>({} as ICardObject[]);
  const [gameLevels, setGameLevels] = useState<Array<string>>([] as Array<string>);

  const getDecks = useCallback(async () => {
    const response: IAirTableResponseData = await api.get('', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
      }
    });

    if (!response) {
      throw new Error('Could not get Decks');
    }

    const dirtyDeck: ICardObject[] = response.data.records;

    const parsedDeck = dirtyDeck.filter(card => (
      card.fields.Fase !== undefined && card.fields.Elemento !== undefined && card.fields.Pergunta !== undefined
    ));

    let registeredLevels: Array<string> = [];

    parsedDeck.forEach(card => {
      if (card.fields.Fase !== undefined && !registeredLevels.includes(card.fields.Fase)) {
        registeredLevels.push(card.fields.Fase);
      }
    });

    setGameLevels(registeredLevels.sort());
    setDeck(parsedDeck);

  }, []);

  const updateDeck = useCallback((updatedDeck: ICardObject[]) => {
    setDeck(updatedDeck);
  }, []);

  useEffect(() => {
    getDecks();
  }, [getDecks]);

  return (
    <DecksContext.Provider value={{ updateDeck, contextDeck: deck, gameLevels }}>
      {children}
    </DecksContext.Provider>
  );
}

function useDeck(): IDecksContext {
  const context = useContext(DecksContext);

  if (!context) {
    throw new Error('Context must be used inside DecksProvider');
  }

  return context;
}

export { DeckProvider, useDeck }
