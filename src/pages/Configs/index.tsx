import React, { useCallback } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { useDeck } from '../../hooks/deckProvider';
import { useGameInstance } from '../../hooks/gameInstance';

const Configs: React.FC = () => {
  const { gameLevels } = useDeck();
  const { setLevel } = useGameInstance();

  const handleChangeLevel = useCallback((element) => {
    setLevel(element.target.value);
  }, [setLevel]);

  return (
    <Container>
      <div>
        <h1>Configurações iniciais do jogo</h1>
        <label>Selecione a etapa / fase do jogo</label>
        <select onChange={handleChangeLevel}>
          {gameLevels && gameLevels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>
      <Link to="/board">Confirmar e começar o jogo!</Link>
    </Container>
  );
}

export default Configs;
