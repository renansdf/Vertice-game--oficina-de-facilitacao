import React from 'react';

import { AnimationContainer, Content, PassoAPasso, Cover } from './styles';
import logoVertice from '../../images/logo-vertice-branca.png';
import { Link } from 'react-router-dom';

const Rules: React.FC = () => {
  return (
    <AnimationContainer>

      <Cover>
        <img src={logoVertice} alt="Vértice logo" />
        <div>
          <h1>Jogo da colheita</h1>
          <p>
            Finalmente, num futuro (esperamos) não muito distante, aprendemos que cultivar é algo muito importante. Descobrimos que o cultivo, cultiva em nós, as habilidades de observar, intervir e cuidar da vida de forma colaborativa. Você, eu e outros como nós, estamos reunidos hoje para pesquisar sobre o cultivo, sobre como ele usa dos 4 elementos para se transformar.
          </p>

          <p>
            Nesta jornada vamos aprender sobre o cultivo da facilitação colaborativa. Respondendo perguntas, pedindo ajuda de sábios convidados e seguindo a anfitriagem de um mestre do cultivo que nos apoiará no descobrimento de como os elementos ao interagir entre si, transformam a vida.
          </p>

          <p>
            Seu objetivo será responder colaborativamente as perguntas sobre facilitação no tempo acordado e da forma en que cada elemento se expressa. Cuidado! precisamos responder perguntas fogo, do jeito fogo e assim sucessivamente. Para vencer é necessário não só vivenciar o arquetipo de cada elemento mas cumrpir com os acordos combinados com seu grupo de pesquisa!
          </p>

          {/* <p>
            Este é um jogo de perguntas e respostas, onde vamos discutir sobre os desafios, problemas e questões envolvidas durante um processo de facilitação. Nós utilizamos a natureza como metáfora pra conseguir enquadrar os diferentes assuntos e criar uma experiência que te ajude a lembrar sempre das diferentes abordagens possíveis.
          </p> */}

          {/* <p>
            Assim, seu objeto de estudo durante o jogo será a influência dos 4 elementos da natureza no resultado da colheita. Cada elemento representa uma forma diferente de enxergar e abordar os problemas que você encontra durante uma facilitação: Terra é sobre AÇÃO, fogo é PROPÓSITO, água é MÉTODO e ar é RELACIONAMENTOS. Para vencer, será necessário prestar atenção no impacto de cada elemento, e entender como manipular a situação a seu favor a partir de cada um.
          </p> */}
        </div>
      </Cover>

      <Content>
        <h2>Como jogar?</h2>
        <PassoAPasso>
          <div>
            <h3>1 - Preparação</h3>
            <p>No início de cada rodada será necessário escolher qual jogador vai responder a próxima pergunta.</p>
          </div>
          <div>
            <h3>2 - Pergunta</h3>
            <p>É sorteada uma nova pergunta do deck, que terá um elemento regente: a terra, o fogo, a água ou o ar. Cada pergunta é um problema ou obstáculo encontrado durante uma facilitação.</p>
          </div>
          <div>
            <h3>3 - Resposta</h3>
            <p>O jogador escolhido responde a pergunta livremente, tentando superar o problema ou obstáculo proposto. Dependendo do método empregado na resolução do problema, a resposta irá ser classificada como um ou mais elementos dentre terra, fogo, água e ar.</p>
          </div>
          <div>
            <h3>4 - Pontuação</h3>
            <p>Quanto mais elementos tiver na sua resposta mais pontos você faz. Tem também um bônus especial caso você consiga formular uma resposta que tem o mesmo elemento que a pergunta.</p>
          </div>
        </PassoAPasso>

        <h2>Elementos</h2>
        <strong>
          Cada elemento tem um significado, acompanhe abaixo cada um deles com exemplos de perguntas que serão feitas durante o jogo
        </strong>
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
            <p>Exemplo de pergunta: Faça ou convide alguém a fazer uma chegança (check-in) agora.</p>
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
            <p>Exemplo de pergunta: Qual o propósito de iniciarmos a facilitação propondo a dinâmica da “chegança” (check in)?</p>
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
            <p>Exemplo de pergunta: Cite algumas formas de como propor a chegança (check-in).</p>
          </div>
          <div className="ar">
            <h3>Ar</h3>
            <section>
              <h4>relacionamento</h4>
              <h4>comunicação</h4>
              <h4>dentro e fora</h4>
              <h4>coletivo</h4>
            </section>
            <p>Exemplo de pergunta: Como a chegança (check-in) pode contribuir para gerar conexões entre pessoas do grupo?</p>
          </div>
        </PassoAPasso>

      </Content>

      {/* <Link to="/configuracoes">Continuar para configurações do jogo</Link> */}
      <Link to="/board">Continuar</Link>
    </AnimationContainer>
  );
}

export default Rules;
