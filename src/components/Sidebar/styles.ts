import styled from 'styled-components';

export const Container = styled.div`

  position: absolute;
  right: 20px;
  background: #fff;
  border-radius: 40px;
  max-width: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Help = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2{
    font-size: 12px;
    text-align: center;
  }

  span{
    margin: 0 5px;
    font-size: 28px;
  }

  button{
    border: none;
    background: rgba(48,13,157,1);
    padding: 5px 0;
    color: #fff;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    line-height: 1em;
  }
`;
