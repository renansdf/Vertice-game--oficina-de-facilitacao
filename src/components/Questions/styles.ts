import styled, { css } from 'styled-components';

interface IContainerProps {
  isChecked: boolean;
}

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 11px;
  background-color: #fff;
  padding: 40px 0%;

  p{
    font-size: 22px;
    max-width: 800px;
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

    button{
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
    }
`;

export const AnswerButton = styled.div<IContainerProps>`
  transition: all 0.3s;
  background-color: pink;
  padding: 10px 30px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  ${props => props.isChecked === true && css`
    background-color: #9f37f5;
    color: #fff;
  `}
`;
