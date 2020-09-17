import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
  from{
    opacity: 0;
    transform: translateY(200px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  animation: ${appearFromBottom} 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
  }

    a{
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
    text-decoration: none;
    margin-top: 40px;

    &:hover{
      transform: translateY(-6px);
      box-shadow: 16px 16px 0px 0px #300d9d;
    }
  }
`;
