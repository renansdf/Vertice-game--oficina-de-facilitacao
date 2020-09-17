import styled, { css } from 'styled-components';

interface IQuestionSelectorProps {
  isHidden: boolean;
}

interface IContainerProps {
  questionElement?: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100%;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;

  ${props => props.questionElement === 'terra' && css`
    background-color: #e4b393d4;
  `}

  ${props => props.questionElement === 'fogo' && css`
    background-color: #ffb3b3;
  `}

  ${props => props.questionElement === 'agua' && css`
    background-color: #b3daff;
  `}

  ${props => props.questionElement === 'ar' && css`
    background-color: #fffbe3;
  `}
`;

export const QuestionSelector = styled.div<IQuestionSelectorProps>`
  background-color: #e56df6;
  color: #300d9d;
  padding: 14px 36px;
  border: none;
  font-size: 22px;
  line-height: 1.4em;
  letter-spacing: .5px;
  font-weight: bold;
  box-shadow: 10px 10px 0px 0px #300d9d;
  transition: .4s;
  cursor: pointer;

  &:hover{
    transform: translateY(-6px);
    box-shadow: 16px 16px 0px 0px #300d9d;
  }

  ${props => props.isHidden && css`
    display: none;
  `}
`;

export const GameStatus = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: auto;
  background-color: purple;
  color: #fff;

  display: flex;
  justify-content:center;
  align-items: center;
  padding: 20px;

  p, button{
    margin: 0 10px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  button{
    outline: none;
    background-color:transparent;
    border: 1px solid #fff;
    border-radius: 3px;
    color: #fff;
    padding: 2px 20px;
    transition: all 0.4s;

    &:hover{
      background-color: #fff;
      color: purple;
    }
  }
`;
