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
`;
