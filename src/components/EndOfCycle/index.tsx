import React, { useCallback } from 'react';
import { useGameInstance } from '../../hooks/gameInstance';
import { Container } from './styles';

interface IElementalState {
  [elemento: string]: { isComplete: boolean; score: number; };
}

interface ICycleScore {
  currentCycle: number;
  cycleDificulty: number;
  elementalScore: IElementalState;
}

const EndOfCycle: React.FC = () => {
  const { setIsCycleEnd, cycleScoreHistory, setCycleScoreHistory, currentCycle, setCurrentCycle, dificulty, setDificulty, elementalState, setElementalState } = useGameInstance();

  const handleClosePopup = useCallback(() => {
    // guardar ciclo no histórico
    let updateCycleScoreObject: ICycleScore[] = [];
    updateCycleScoreObject = [...cycleScoreHistory, {
      currentCycle,
      elementalScore: elementalState,
      cycleDificulty: dificulty
    }];
    setCycleScoreHistory(updateCycleScoreObject);

    // regular dificuldade (checar se é necessário)
    const newDificulty = dificulty + 1;
    setDificulty(newDificulty);

    // zerar elemental state
    const newCycle = currentCycle + 1;
    setCurrentCycle(newCycle);

    setElementalState({
      terra: { isComplete: false, score: 0, },
      agua: { isComplete: false, score: 0, },
      ar: { isComplete: false, score: 0, },
      fogo: { isComplete: false, score: 0, },
    });

    setIsCycleEnd(false);
  }, [currentCycle, cycleScoreHistory, dificulty, elementalState, setCurrentCycle, setCycleScoreHistory, setDificulty, setElementalState, setIsCycleEnd]);

  return (
    <Container>
      Fim do ciclo!

      sua pontuação:

      <button onClick={handleClosePopup}>Continuar para o próximo ciclo</button>
    </Container>
  );
}

export default EndOfCycle;
