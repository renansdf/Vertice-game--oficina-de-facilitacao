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
  justify-content: center;
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 40px;
`;

export const PassoAPasso = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;

  margin-top:30px;

  > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 10px;
    border-radius: 50px;
    width: 24%;
    max-width: 300px;
    margin: 0 10px;
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
      margin: 2px;
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

  @media (max-width: 650px){
    > div {
      width: 100%;
    }
  }
`;
