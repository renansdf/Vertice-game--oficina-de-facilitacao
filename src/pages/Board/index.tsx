import React, { useCallback, useState } from 'react';
import { Container, QuestionSelector, GameStatus } from './styles';

import Status from '../../components/Status';
import { useGameInstance } from '../../hooks/gameInstance';
import { useDeck } from '../../hooks/deckProvider';
import Questions from '../../components/Questions';
import EndOfCycle from '../../components/EndOfCycle';
import Button from '../../components/Button';
import ElementKeywords from '../../components/ElementKeywords';
// import Sidebar from '../../components/Sidebar';

const Board: React.FC = () => {
  const { availableElements, level, updateElementalState, elementalState, isCycleEnd, currentCycle, dificulty, cycleScoreHistory, baseScore } = useGameInstance();
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
      const randomQuestion = contextDeck[Math.floor(Math.random() * contextDeck.length)];

      const updatedDeck = contextDeck.filter(
        question =>
          question.id !== randomQuestion.id
      );

      updateDeck(updatedDeck);
      setQuestion(randomQuestion.fields.Pergunta);
      setQuestionElement(randomQuestion.fields.Elemento);
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
    <Container
      questionElement={questionElement}
      hideTitle={!!question}
    >

      <h1>Rodada {currentCycle}</h1>

      <Status />
      <QuestionSelector
        isHidden={!!question}
        onClick={handleSelectQuestion}
      >
        Nova pergunta
      </QuestionSelector>

      {question && (
        <>
          <Questions
            questionElementValue={questionElement}
            questionText={question}
            handleAnswer={handleAnswer}
          />

          <ElementKeywords />
          {/* <Sidebar /> */}
        </>
      )}


      <GameStatus>
        <p>Fase: {level}</p>
        <p>Rodada: {currentCycle}</p>
        <p>Dificuldade: {dificulty}</p>
        <p>Pontos necessários: {baseScore + dificulty}</p>
        <Button onClick={logElementalState}>log</Button>
        {warning && <p>Aviso: {warning}</p>}
      </GameStatus>

      {isCycleEnd && <EndOfCycle />}
    </Container>
  );
}

export default Board;
