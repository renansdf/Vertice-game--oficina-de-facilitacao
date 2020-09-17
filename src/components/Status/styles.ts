import styled, { css } from 'styled-components';

interface IElementalStatusProps {
  isComplete: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 90%;
  max-width: 1000px;
  margin-bottom: 30px;
`;

export const ElementStatus = styled.div<IElementalStatusProps>`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 24%;

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
