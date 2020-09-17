import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  animation: ${fadeIn} .6s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background: rgb(134,27,241);
  background: linear-gradient(324deg, rgba(134,27,241,1) 0%, rgba(48,13,157,1) 100%);

  div{
    animation: ${appearFromBottom} .6s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    padding: 45px 45px;
    color: rgba(48,13,157,1);
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 18px 30px -15px #1d0958;
  }

  h1{
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 25px;
    letter-spacing: .5px;
  }

  label{
    margin-bottom: 10px;
  }

  select{
    background: rgb(134,27,241);
    background: linear-gradient(324deg, rgba(134,27,241,1) 0%, rgba(48,13,157,1) 100%);
    color: #fff;
    border: none;
    padding: 5px 10px;
    width: 80px;
  }

  a{
    animation: ${appearFromBottom} .6s;
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
    text-decoration: none;

    &:hover{
      transform: translateY(-6px);
      box-shadow: 16px 16px 0px 0px #ff74e9;
    }
  }
`;
