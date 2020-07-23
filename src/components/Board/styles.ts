import styled from 'styled-components';
import feltro from '../../images/feltro-verde-1.jpg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: green;
  overflow: hidden;
  background-image: url(${feltro});
`;
