import React, { useCallback, useState } from 'react';
import { Container, QuestionSelector } from './styles';

import Status from '../../components/Status';
import { useGameInstance } from '../../hooks/gameInstance';
import { useDeck } from '../../hooks/deckProvider';
import Questions from '../../components/Questions';
import EndOfCycle from '../../components/EndOfCycle';

const Board: React.FC = () => {
  const { availableElements, level, updateElementalState, elementalState, isCycleEnd, currentCycle, dificulty, cycleScoreHistory } = useGameInstance();
  const { contextDeck, updateDeck } = useDeck();
  const [warning, updateWarning] = useState<string>();
  const [question, setQuestion] = useState<string>();
  const [questionElement, setQuestionElement] = useState<string>();

  const handleSelectQuestion = useCallback(() => {
    const available = availableElements();

    const filteredDeck = contextDeck.filter(
      question =>
        available.includes(question.fields.Elemento) && question.fields.Fase === level
    );

    if (!filteredDeck.length) {
      updateWarning(`não há mais cartas de ${available} da fase ${level}`);
      return;
    }

    const randomQuestion = filteredDeck[Math.floor(Math.random() * filteredDeck.length)];

    const updatedDeck = contextDeck.filter(
      question =>
        question.id !== randomQuestion.id
    );

    updateDeck(updatedDeck);
    setQuestion(randomQuestion.fields.Pergunta);
    setQuestionElement(randomQuestion.fields.Elemento);
  }, [setQuestion, contextDeck, availableElements, level, updateDeck]);

  const handleAnswer = useCallback((answer: string[]) => {
    let answerObject = {};
    answer.forEach(element => {
      let score: number;
      element === questionElement ? score = 4 : score = 2;
      answerObject = { ...answerObject, [element]: score };
    });

    updateElementalState(answerObject);

    setQuestion("");
    setQuestionElement("");
  }, [updateElementalState, questionElement]);

  function logElementalState() {
    console.log(elementalState);
    console.log(cycleScoreHistory);
  }

  return (
    <Container>

      <Status />

      <p>
        Fase: {level}
      </p>

      <QuestionSelector
        onClick={handleSelectQuestion}
      >
        <div>
          deck de perguntas
        </div>
      </QuestionSelector>

      <p>{questionElement}</p>

      {question && (

        <Questions
          questionText={question}
          handleAnswer={handleAnswer}
        />

      )}

      <div onClick={logElementalState}>
        log
      </div>

      {warning && <p>warning: {warning}</p>}
      {currentCycle && <p>current cycle: {currentCycle}</p>}
      {dificulty && <p>dificulty: {dificulty}</p>}

      {isCycleEnd && <EndOfCycle />}
    </Container>
  );
}

export default Board;
