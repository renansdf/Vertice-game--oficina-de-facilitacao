import styled from 'styled-components';

export const Container = styled.div`
  height: 35vh;
  padding: 5vh 0 10px;
  overflow: auto;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: flex-start;

  > div{
    width: 90%;
    max-width: 190px;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 18px;
    font-size: 12px;
    line-height: 1.2em;
    overflow: auto;
    margin: 0 20px;
    color: #100162;
    border-radius: 7px;
    border: 1px solid #100162;
    box-shadow: 0px 9px 10px -11px #100162;
    position: relative;
    cursor: pointer;
    flex-shrink: 0;

    span{
      display: block;
      position: absolute;
      bottom: 10px;
      background-color: #e9ff00;
      border-radius: 10px;
      padding: 0px 6px 1px;
    }
  }

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #100162;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e56df6;
    outline: 1px solid #e56df6;
    border-radius: 10px;
  }
`;

