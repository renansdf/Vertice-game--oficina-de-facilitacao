import styled from 'styled-components';

export const Container = styled.button`
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

  &:hover{
    transform: translateY(-6px);
    box-shadow: 16px 16px 0px 0px #300d9d;
  }
`;
