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
    width: 48%;
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

  h2{
    font-weight: 700;
    font-size: 40px;
    margin-top: 60px;
  }

  p + strong{
    margin-top: 20px;
  }

  strong{
    font-size: 15px;
    max-width: 400px;
    letter-spacing: .5px;
    text-transform: uppercase;
    margin: 15px 0;
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
  align-items: flex-start;
  flex-wrap: wrap;

  margin-top:30px;

  > div{
    width: 45%;
    margin-bottom: 20px;

    h3{
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom:10px;
    }

    p{
      font-size: 12px;
    }
  }
`;
