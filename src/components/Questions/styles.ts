import styled, { css } from 'styled-components';

interface IContainerProps {
  isChecked: boolean;
}

export const Container = styled.div`
  width: 90%;
  background-color: rgb(16 1 98 / 18%);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 11px;

  p{
    height: 24vh;
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

    button{
      transition: all .4s;
      text-transform: uppercase;
      background: none;
      border: none;
      margin: 0px;
      background-color: #fff;
      color: #100162;
      border-radius: 0px;
      padding: 12px 15px;
      font-size: 13px;
      letter-spacing: .6px;
      box-shadow: 0 7px 0 0 #100162, 0 10px 5px 0px #e56df6;
      border-left: 1px solid #100162;
      border-right: 1px solid #100162;
      &:hover{
        transform: translateY(2px);
        box-shadow: 0 5px 0 0 #100162, 0 8px 5px 0px #e56df6;
      }
      &:first-child{
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border: none;
      }

      &:last-child{
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        border: none;
      }
    }
  }
`;

export const AnswerButton = styled.div<IContainerProps>`
  transition: all 0.3s;
  background-color: grey;

  ${props => props.isChecked === true && css`
    background-color: blue;
  `}
`;
