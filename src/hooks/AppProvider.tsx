import React from 'react';
import { DeckProvider } from './deckProvider';
import { GameInstanceProvider } from './gameInstance';

const AppProvider: React.FC = ({ children }) => {
  return (
    <DeckProvider>
      <GameInstanceProvider>
        {children}
      </GameInstanceProvider >
    </DeckProvider>
  );
};

export default AppProvider;
