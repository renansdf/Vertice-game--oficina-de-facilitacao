import styled from 'styled-components';

export const Container = styled.button`
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

  &:hover{
    transform: translateY(-6px);
    box-shadow: 16px 16px 0px 0px #ff74e9;
  }
`;
