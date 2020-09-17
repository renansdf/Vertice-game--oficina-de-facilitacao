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
  animation: ${fadeIn} .2s;
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  background: rgb(134,27,241);
  background: linear-gradient(324deg, rgba(134,27,241,1) 0%, rgba(48,13,157,1) 100%);
  color: #fff;

  h1{
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 50px;
  }

  h1, div, a, button{
    animation: ${appearFromBottom} .6s;
  }
`;
