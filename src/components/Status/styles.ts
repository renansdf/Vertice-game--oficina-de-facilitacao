import styled, { css, keyframes } from 'styled-components';

interface IElementalStatusProps {
  isComplete: boolean;
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
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 90%;
  max-width: 1000px;
  margin-bottom: 30px;

  transition: all .6s;
`;

export const ElementStatus = styled.div<IElementalStatusProps>`
  animation: ${appearFromBottom} .6s;
  width: 24%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding: 22px 30px;
  color: rgba(48,13,157,1);
  background-color: #fff;
  border-radius: 60px;
  box-shadow: 0 18px 30px -15px #1d09587d;

  img{
    margin-bottom: 20px;
    height: auto;
    max-height: 150px;
  }

  div{
    width: 90%;
    font-size: 20px;
    text-align: center;
  }

  ${props => props.isComplete && css`
    background-color: #e5ffe5;
  `}
`;
