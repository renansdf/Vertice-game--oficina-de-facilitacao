import React from 'react';

import { Container, ElementStatus } from './styles';
import Terra from '../../images/terra.png';
import Fogo from '../../images/fogo.png';
import Agua from '../../images/agua.png';
import Ar from '../../images/ar.png';
import { useGameInstance } from '../../hooks/gameInstance';

const Status: React.FC = () => {
  const { elementalState } = useGameInstance();

  return (
    <Container>
      <ElementStatus
        isComplete={elementalState.terra.isComplete}
      >
        <img alt="terra" src={Terra} />
        <label>Terra</label>
        <div>{elementalState.terra.score} pontos</div>
      </ElementStatus>

      <ElementStatus
        isComplete={elementalState.fogo.isComplete}
      >
        <img alt="fogo" src={Fogo} />
        <label>Fogo</label>
        <div>{elementalState.fogo.score} pontos</div>
      </ElementStatus>

      <ElementStatus
        isComplete={elementalState.agua.isComplete}
      >
        <img alt="água" src={Agua} />
        <label>Água</label>
        <div>{elementalState.agua.score} pontos</div>
      </ElementStatus>

      <ElementStatus
        isComplete={elementalState.ar.isComplete}
      >
        <img alt="ar" src={Ar} />
        <label>Ar</label>
        <div>{elementalState.ar.score} pontos</div>
      </ElementStatus>
    </Container>
  );
}

export default Status;
