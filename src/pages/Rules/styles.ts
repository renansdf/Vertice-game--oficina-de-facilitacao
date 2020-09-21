import styled from 'styled-components';
import trianguloDireita from '../../images/meio-triangulo-direita.svg';

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 100px;

  a{
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
    text-decoration: none;

    &:hover{
      transform: translateY(-6px);
      box-shadow: 16px 16px 0px 0px #ff74e9;
    }
  }
`;

export const Cover = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  color: #fff;

  background: rgb(134,27,241);
  background: url(${trianguloDireita}), linear-gradient(324deg, rgba(134,27,241,1) 0%, rgba(48,13,157,1) 100%);
  background-repeat: no-repeat;
  background-position: right;


  img{
    position: absolute;
    top: 40px;
    margin-bottom: 50px;
    max-width: 250px;
  }

  div{
    width: 90%;
    max-width: 700px;
    text-align: left;
  }

  h1, strong{
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: 1px;
    display: block;
  }

  p{
    font-size: 17px;
    line-height: 1.4em;
    letter-spacing: .5px;
    padding: 22px 30px;
    color: rgba(48,13,157,1);
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 18px 30px -15px #1d0958;
  }

  p + p{
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 80px;

  h2{
    font-weight: 700;
    font-size: 40px;
    margin-top: 60px;
    color: #6b5d96;
  }

  p + strong{
    margin-top: 20px;
  }

  strong{
    font-size: 15px;
    max-width: 400px;
    letter-spacing: .5px;
    text-transform: uppercase;
    margin: 5px 0 0;
  }

  p{
    font-size: 14px;
    line-height: 1.5em;
    letter-spacing: 0.4px;
    margin-bottom: 10px;
  }
`;

export const PassoAPasso = styled.div`
  max-width: 700px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;

  margin-top:30px;

  > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 20px;
    border-radius: 50px;
    width: 49%;
    margin-bottom: 20px;
    background: rgb(134,27,241);
    background: linear-gradient(324deg, rgba(134,27,241,1) 0%, rgba(48,13,157,1) 100%);
    box-shadow: 0 18px 30px -15px #1d0958;

    h3{
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 0px;
    }

    section{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content:center;
      margin: 8px 0;
    }

    h4{
      background-color: #ffffffd9;
      color: #1d0958;
      padding: 1px 4px;
      margin:2px;
      font-size: 12px;
      border-radius: 2px;
      letter-spacing: 1px;

    }

    p{
      font-size: 12px;
      line-height: 1.3em;
    }
  }

  >div.terra{
    background: rgba(235,185,152,1);
    background: linear-gradient(324deg, rgba(122,59,18,1) 50%, rgba(235,185,152,1) 93%);
  }

  >div.fogo{
    background: rgba(255,167,167,1);
    background: linear-gradient(324deg, rgba(226,81,58,1) 50%, rgba(255,167,167,1) 100%);
  }
  >div.agua{
    background: rgba(179,218,255,1);
    background: linear-gradient(324deg, rgba(27,157,241,1) 50%, rgba(179,218,255,1) 100%);
  }
  >div.ar{
    background: rgba(255,251,227,1);
    background: linear-gradient(324deg, rgba(207,179,5,1) 50%, rgba(245,230,137,1) 100%);
  }
`;
