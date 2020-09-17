import React, { useState, useEffect, useCallback } from 'react';
import { Container, AnswerButton } from './styles';

interface IQuestionsProps {
  questionText: string;
  questionElementValue?: string;
  handleAnswer: (answer: string[]) => void;
}

const Questions: React.FC<IQuestionsProps> = ({ questionText, handleAnswer, questionElementValue }) => {
  const [question, setQuestion] = useState<string>();
  const [questionElement, setQuestionElement] = useState<string>();
  const [terra, setTerra] = useState<boolean>(false);
  const [fogo, setFogo] = useState<boolean>(false);
  const [agua, setAgua] = useState<boolean>(false);
  const [ar, setAr] = useState<boolean>(false);

  const handleElementSelect = useCallback((element) => {
    switch (element) {
      case "terra":
        setTerra(!terra)
        break;

      case "fogo":
        setFogo(!fogo)
        break;

      case "agua":
        setAgua(!agua)
        break;

      case "ar":
        setAr(!ar)
        break;
    }


  }, [setTerra, terra, fogo, setFogo, agua, setAgua, ar, setAr]);

  const handleAnswerSubmit = useCallback(() => {
    let answer: string[] = [];
    if (terra) { answer.push('terra') }
    if (fogo) { answer.push('fogo') }
    if (agua) { answer.push('agua') }
    if (ar) { answer.push('ar') }
    handleAnswer(answer);
  }, [terra, fogo, agua, ar, handleAnswer]);

  useEffect(() => {
    setQuestion(questionText);
    setQuestionElement(questionElementValue);
  }, [questionText, questionElementValue]);

  return (
    <Container>
      <span>{questionElement}</span>
      <p>{question}</p>

      <div>
        <AnswerButton isChecked={terra} onClick={() => handleElementSelect("terra")}>
          Terra
        </AnswerButton>

        <AnswerButton isChecked={fogo} onClick={() => handleElementSelect("fogo")}>
          fogo
        </AnswerButton>

        <AnswerButton isChecked={agua} onClick={() => handleElementSelect("agua")}>
          agua
        </AnswerButton>

        <AnswerButton isChecked={ar} onClick={() => handleElementSelect("ar")}>
          ar
        </AnswerButton>
      </div>

      <button onClick={handleAnswerSubmit}>Enviar resposta</button>

    </Container>
  );
}

export default Questions;
