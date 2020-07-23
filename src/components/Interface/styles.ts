import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
`;

export const DecksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const Deck = styled.div`
  font-family: 'Merienda One', cursive;
  width: 200px;
  height: 30vh;
  transform: translateY(30%);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h2{
    margin-bottom: 15px;
    font-size: 30px;
  }
  button{
    background: none;
    border: none;

    img{
      transition: all .4s;
      max-width: 100%;
      &:hover{
        transform: translateY(-20px);
      }
    }
  }
`;

export const Questions = styled.div`
  width: 90%;
  background-color: rgb(0 0 0 / 16%);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 11px;

  p{
    height: 25vh;
    font-size: 22px;
    max-width: 800px;
    text-align: center;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;

    button{
      transition: all .4s;
      text-transform: uppercase;
      background: none;
      border: none;
      margin: 0 10px;
      background-color: #fff;
      border-radius: 25px;
      padding: 5px 15px;
      font-size: 13px;
      letter-spacing: .6px;
      box-shadow: 0px 0px 10px -1px #fff;
      &:hover{
        transform: translateY(-3px);
      }
    }
  }
`;

export const UsedCards = styled.div`
  height: 35vh;
  padding: 5vh 0 10px;
  overflow: auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: center;

  > div{
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
    color: #000;
    border-radius: 7px;
    border: 1px solid #010101;
    box-shadow: 0 0 0 10px #fff;
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
`;

