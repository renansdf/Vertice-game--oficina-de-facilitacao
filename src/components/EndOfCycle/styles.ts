import styled from 'styled-components';

export const Container = styled.div`
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
  color: #000;

  h1{
    margin-bottom: 30px;
  }

  button{
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
    cursor: pointer;

    &:hover{
      transform: translateY(-6px);
      box-shadow: 16px 16px 0px 0px #300d9d;
    }
  }
`;
