import React from 'react';

import { Container, PassoAPasso } from './styles';

const ElementKeywords: React.FC = () => {
  return (
    <Container>
      <PassoAPasso>
        <div className="terra">
          <h3>Terra</h3>
          <section>
            <h4>execução</h4>
            <h4>concreto</h4>
            <h4>físico</h4>
            <h4>memória</h4>
            <h4>tangível</h4>
          </section>
        </div>
        <div className="fogo">
          <h3>Fogo</h3>
          <section>
            <h4>propósito</h4>
            <h4>inspiração</h4>
            <h4>essência</h4>
            <h4>ideais</h4>
            <h4>ideias</h4>
            <h4>sentido</h4>
            <h4>motivação</h4>
          </section>
        </div>
        <div className="agua">
          <h3>Água</h3>
          <section>
            <h4>método</h4>
            <h4>fluxo</h4>
            <h4>processo</h4>
            <h4>ir e vir</h4>
            <h4>transformação</h4>
            <h4>mudança</h4>
          </section>
        </div>
        <div className="ar">
          <h3>Ar</h3>
          <section>
            <h4>relacionamento</h4>
            <h4>comunicação</h4>
            <h4>dentro e fora</h4>
            <h4>coletivo</h4>
          </section>
        </div>
      </PassoAPasso>
    </Container>
  );
}

export default ElementKeywords;
