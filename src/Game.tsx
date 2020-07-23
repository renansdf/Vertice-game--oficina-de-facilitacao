import React from 'react';
import GlobalStyle from './styles/global';
import Board from './components/Board';
import Interface from './components/Interface';

const Game: React.FC = () => {
  return (
    <>
      <Board>
        <Interface />
      </Board>
      <GlobalStyle />
    </>
  );
};

export default Game;
