import React from 'react';

import { Container, ElementStatus } from './styles';

const Status: React.FC = () => {
  return (
    <Container>
      <ElementStatus>
        <img alt="terra" />
        <label>Terra</label>
        <div>Valor</div>
      </ElementStatus>

      <ElementStatus>
        <img alt="fogo" />
        <label>Fogo</label>
        <div>Valor</div>
      </ElementStatus>

      <ElementStatus>
        <img alt="água" />
        <label>Água</label>
        <div>Valor</div>
      </ElementStatus>

      <ElementStatus>
        <img alt="ar" />
        <label>Ar</label>
        <div>Valor</div>
      </ElementStatus>
    </Container>
  );
}

export default Status;
