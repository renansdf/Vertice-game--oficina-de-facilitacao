import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import api from '../services/api';

interface IRecordObject {
  fields: {
    [key: string]: string;
  }
}

interface IAirTableResponseData {
  data: {
    records: Array<IRecordObject>;
  }
}

interface IDeckData {
  name: string;
  cards: Array<string>;
}

interface IDecksContext {
  updateDecks: (updatedDecks: IDeckData[]) => void;
  contextDecks: IDeckData[];
}

const DecksContext = createContext<IDecksContext>({} as IDecksContext);

const DecksProvider: React.FC = ({ children }) => {
  const [decks, setDecks] = useState<IDeckData[]>([] as IDeckData[]);

  const getDecks = useCallback(async () => {
    const response: IAirTableResponseData = await api.get('', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
      }
    });

    if (!response) {
      throw new Error('Could not get Decks');
    }

    const records = response.data.records;
    const foundDecks: IDeckData[] = [];
    const keys: Array<string> = [];

    records.forEach(record => {
      let recordKeys = Object.keys(record.fields);
      recordKeys.forEach(recordKey => {
        if (keys.indexOf(recordKey) === -1) {
          keys.push(recordKey);
        }
      });
    });

    keys.forEach(key => {
      foundDecks.push({ name: key, cards: [] });
    });

    records.forEach(record => {
      let keys = Object.keys(record.fields);
      keys.forEach(key => {
        foundDecks.forEach(deck => {
          if (deck.name === key) {
            deck.cards.push(record.fields[key]);
          }
        });
      });
    });

    setDecks(foundDecks);

  }, []);

  const updateDecks = useCallback((updatedDecks: IDeckData[]) => {
    setDecks(updatedDecks);
  }, []);

  useEffect(() => {
    getDecks();
  }, [getDecks]);

  return (
    <DecksContext.Provider value={{ updateDecks, contextDecks: decks }}>
      {children}
    </DecksContext.Provider>
  );
}

function useDecks(): IDecksContext {
  const context = useContext(DecksContext);

  if (!context) {
    throw new Error('Context must be used inside DecksProvider');
  }

  return context;
}

export { DecksProvider, useDecks }
