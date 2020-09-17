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

export const AnimationContainer = styled.div`
  animation: ${appearFromBottom} 1s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  padding: 5vh 0;

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

export const Content = styled.div`
  width: 90%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;

  h1, strong{
    font-size: 30px;
    margin-bottom: 10px;
    display: block;
  }

  h2{
    margin-top: 50px;
  }

  p + strong{
    margin-top: 20px;
  }

  aside{
    width: 30%;
  }

  p{
    font-size: 14px;
    line-height: 1.5em;
    letter-spacing: 0.4px;
    margin-bottom: 10px;
  }
`;

export const PassoAPasso = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  > div{
    width: 45%;
    p{
      font-size: 12px;
    }
  }
`;
