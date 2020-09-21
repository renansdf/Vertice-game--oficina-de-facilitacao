import styled, { css, keyframes } from 'styled-components';

interface IContainerProps {
  isChecked: boolean;
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

export const Container = styled.div`
  animation: ${appearFromBottom} .6s;
  width: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 18px 30px -15px #1d09587d;
  padding: 40px 0%;

  p{
    font-size: 22px;
    max-width: 980px;
    text-align: center;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
  }
`;

export const AnswerButton = styled.div<IContainerProps>`
  transition: all 0.3s;
  background-color: transparent;
  border-radius: 30px;
  border: 1px solid #1d0958;
  padding: 8px 24px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  margin: 0 5px;
  font-weight: 700;

  ${props => props.isChecked === true && css`
    background: rgb(134,27,241);
    background: linear-gradient(324deg, rgba(134,27,241,1) 0%, rgba(48,13,157,1) 100%);
    color: #fff;
  `}
`;
