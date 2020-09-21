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

export const Container = styled.div`
  animation: ${appearFromBottom} 0.6s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 5%;
  position: absolute;
  bottom: 57px;
  background: rgb(134,27,241);
  color: #fff;

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24%;
    flex-wrap: wrap;
    text-align: center;
  }

  h3{
    width: 100%;
  }

  span{
    margin: 0 5px ;
  }
`;
