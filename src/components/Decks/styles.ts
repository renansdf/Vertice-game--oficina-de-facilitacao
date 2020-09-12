import styled from 'styled-components';

export const DecksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const Deck = styled.div`
  width: 200px;
  height: 30vh;
  transform: translateY(30%);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;

  div{
    position: relative;

    &:hover{
      button{
        opacity: 1;
      }
    }

    p{
      font-size: 13px;
    }

    h2{
      margin-bottom: 15px;
      font-size: 30px;
    }

    button{
      position: absolute;
      right: -30px;
      top: 22px;
      background: none;
      border: none;
      opacity: 0;
      transition: opacity 0.4s;

      & + button{
        left: -30px;
        right: unset;
      }

      svg{
        color: #300d9d;
      }
    }
  }

  &:first-child{
    button:last-child{
      display:none;
    }
  }

  &:last-child{
    button{
      display:none;
      &:last-child{
        display:block;
      }
    }
  }
`;

export const Card = styled.div`
  background: none;
  border: none;
  cursor: pointer;

  img{
    transition: all .4s;
    max-width: 100%;
    &:hover{
      transform: translateY(-20px);
    }
  }
`;
