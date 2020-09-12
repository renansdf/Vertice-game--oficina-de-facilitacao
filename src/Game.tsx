import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks/AppProvider';
import Routes from './routes';

const Game: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </Router>
  );
};

export default Game;
