import React from 'react';

import { Container, PassoAPasso } from './styles';

const ElementKeywords: React.FC = () => {
  return (
    <Container>
      <PassoAPasso>
        <div className="terra">
          <h3>Terra</h3>
          <section>
            <h4>ação</h4>
            <h4>exemplo</h4>
          </section>
        </div>
        <div className="fogo">
          <h3>Fogo</h3>
          <section>
            <h4>propósito</h4>
            <h4>essência</h4>
          </section>
        </div>
        <div className="agua">
          <h3>Água</h3>
          <section>
            <h4>método</h4>
            <h4>processo</h4>
          </section>
        </div>
        <div className="ar">
          <h3>Ar</h3>
          <section>
            <h4>relacionamento</h4>
            <h4>comunicação</h4>
          </section>
        </div>
      </PassoAPasso>
    </Container>
  );
}

export default ElementKeywords;
