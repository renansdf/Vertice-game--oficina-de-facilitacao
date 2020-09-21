import styled, { css, keyframes } from 'styled-components';

interface IQuestionSelectorProps {
  isHidden: boolean;
}

interface IContainerProps {
  questionElement?: string;
  hideTitle: boolean;
}

const appearFromBottom = keyframes`
  from{
    opacity: 0;
    transform: translateY(100px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from{
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Container = styled.div<IContainerProps>`
  animation: ${fadeIn} 0.6s;
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 150px;

  transition: all .6s;

  h1{
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  ${props => props.hideTitle && css`
    h1{
      display: none;
    }
  `}

  ${props => props.questionElement === 'terra' && css`
    background: rgba(235,185,152,1);
    background: linear-gradient(324deg, rgba(122,59,18,1) 0%, rgba(235,185,152,1) 93%);
  `}

  ${props => props.questionElement === 'fogo' && css`
    background: rgba(255,167,167,1);
    background: linear-gradient(324deg, rgba(226,81,58,1) 0%, rgba(255,167,167,1) 100%);
  `}

  ${props => props.questionElement === 'agua' && css`
    background: rgba(179,218,255,1);
    background: linear-gradient(324deg, rgba(27,157,241,1) 0%, rgba(179,218,255,1) 100%);
  `}

  ${props => props.questionElement === 'ar' && css`
    background: rgba(255,251,227,1);
    background: linear-gradient(324deg, rgba(255,219,0,1) 0%, rgba(255,251,227,1) 100%);
  `}
`;

export const QuestionSelector = styled.div<IQuestionSelectorProps>`
  animation: ${appearFromBottom} 0.6s;
  border: none;
  line-height: 1.4em;
  letter-spacing: .5px;
  transition: .4s;
  cursor: pointer;
  background: rgb(134,27,241);
  background: linear-gradient(324deg, rgba(134,27,241,1) 0%, rgba(48,13,157,1) 100%);
  color: #fff;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: 10px 10px 0px 0px #ff74e9;
  margin-top: 15px;

  &:hover{
    transform: translateY(-6px);
    box-shadow: 16px 16px 0px 0px #ff74e9;
  }

  ${props => props.isHidden && css`
    display: none;
  `}
`;

export const GameStatus = styled.div`
  animation: ${appearFromBottom} 0.6s;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: auto;
  color: #fff;
  background: rgb(134,27,241);
  background: linear-gradient(324deg, rgba(134,27,241,1) 0%, rgba(48,13,157,1) 100%);

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
`;

