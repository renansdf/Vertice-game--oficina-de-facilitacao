import React, { createContext, useContext, useCallback, useState } from 'react';

interface IElementalState {
  [elemento: string]: { isComplete: boolean; score: number; };
}

interface IAnswerScore {
  [elemento: string]: number;
}

interface ICycleScore {
  currentCycle: number;
  cycleDificulty: number;
  elementalScore: IElementalState;
}

interface IGameInstanceContext {
  level: string;
  setLevel: (level: string) => void;
  elementalState: IElementalState;
  setElementalState: (cycleElemetalState: IElementalState) => void;
  availableElements: () => Array<string>;
  updateElementalState: (answerScore: IAnswerScore) => void;
  isCycleEnd: boolean;
  setBaseScore: (value: number) => void;
  setDificulty: (value: number) => void;
  setIsCycleEnd: (status: boolean) => void;
  cycleScoreHistory: ICycleScore[];
  setCycleScoreHistory: (cycleUpdateObject: ICycleScore[]) => void;
  currentCycle: number;
  setCurrentCycle: (value: number) => void;
  dificulty: number;
}

const GameInstanceContext = createContext<IGameInstanceContext>({} as IGameInstanceContext);

const GameInstanceProvider: React.FC = ({ children }) => {
  const [currentCycle, setCurrentCycle] = useState<number>(1);
  const [isCycleEnd, setIsCycleEnd] = useState<boolean>(false);
  const [baseScore, setBaseScore] = useState<number>(4);
  const [dificulty, setDificulty] = useState<number>(0);
  const [level, setLevel] = useState<string>("1");
  const [elementalState, setElementalState] = useState<IElementalState>({
    terra: { isComplete: false, score: 0, },
    agua: { isComplete: false, score: 0, },
    ar: { isComplete: false, score: 0, },
    fogo: { isComplete: false, score: 0, },
  });
  const [cycleScoreHistory, setCycleScoreHistory] = useState<ICycleScore[]>([] as ICycleScore[]);

  const availableElements = useCallback(() => {
    let available = [];
    for (const [key, value] of Object.entries(elementalState)) {
      if (!value.isComplete) {
        available.push(key);
      }
    }
    return available;
  }, [elementalState]);

  const updateElementalState = useCallback((answerScore: IAnswerScore) => {
    let updateObject: IElementalState = { ...elementalState };
    const goalScore = baseScore + dificulty;
    const completedElements = [];
    for (const [key, value] of Object.entries(elementalState)) {
      if (answerScore[key]) {
        const finalValue = value.score + answerScore[key];

        let isComplete: boolean = false;
        (finalValue >= goalScore) ? isComplete = true : isComplete = false;

        if (isComplete) {
          completedElements.push(key);
        }

        updateObject = { ...updateObject, [key]: { isComplete, score: finalValue } }
      }
    }

    setElementalState(updateObject);

    if (completedElements.length === Object.keys(updateObject).length) {
      setIsCycleEnd(true);
    }

  }, [elementalState, baseScore, dificulty]);

  return (
    <GameInstanceContext.Provider value={{ level, setLevel, elementalState, availableElements, updateElementalState, isCycleEnd, setBaseScore, setDificulty, setIsCycleEnd, cycleScoreHistory, setCycleScoreHistory, currentCycle, setCurrentCycle, dificulty, setElementalState }}>
      {children}
    </GameInstanceContext.Provider>
  );
}

function useGameInstance(): IGameInstanceContext {
  const context = useContext(GameInstanceContext);

  if (!context) {
    throw new Error('Context must be used inside GameInstanceContext');
  }

  return context;
}

export { GameInstanceProvider, useGameInstance }
