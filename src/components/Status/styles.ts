import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 90%;
  max-width: 1000px;
`;

export const ElementStatus = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  img{
    margin-bottom: 20px;
    width: 90%;
    height: auto;
  }

  div{
    width: 90%;
    font-size: 20px;
  }
`;
