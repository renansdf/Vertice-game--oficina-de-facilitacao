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
            Você é um pesquisador que deseja aprofundar seus conhecimentos. Separamos pra você alguns desafios que vão te fazer pensar em como resolver problemas de um jeito diferente. Aqui você vai aprender a mudar sua abordagem de acordo com a situação e ouvir as histórias de sábios convidados sobre os problemas que você vai encontrar. Junto de outros pesquisadores, você poderá compartilhar vivências e pedir ajuda quando precisar.
          </p>

          <p>
            Seu objeto de estudo durante o jogo será a influência dos 4 elementos da natureza no resultado da colheita. Para vencer, será necessário prestar atenção no impacto de cada elemento, e entender como manipular a situação a seu favor a partir do arquétipo de cada elemento.
          </p>
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
            <p>Se a resposta tiver o mesmo elemento que a pergunta, e quanto mais elementos tiver a resposta, mais pontos você ganha.</p>
          </div>
        </PassoAPasso>

        <h2>Elementos</h2>
        <strong>
          Cada elemento tem um significado, acompanhe abaixo cada um deles
        </strong>
        <PassoAPasso>
          <div>
            <h3>Fogo</h3>
            <p>perguntas e respostas com ...</p>
          </div>
          <div>
            <h3>Terra</h3>
            <p>perguntas e respostas com <span>ação.</span></p>
            <p>exemplo de pergunta: Faça um check in</p>
            <p>exemplo de resposta: Eu cheguei hoje sentindo [descrever sentimento] e esperando [descrever expectativas]</p>
          </div>
          <div>
            <h3>Água</h3>
            <p>perguntas e respostas com <span>ação.</span></p>
            <p>exemplo de pergunta: Faça um check in</p>
            <p>exemplo de resposta: Eu cheguei hoje sentindo [descrever sentimento] e esperando [descrever expectativas]</p>
          </div>
          <div>
            <h3>Ar</h3>
            <p>perguntas e respostas com <span>ação.</span></p>
            <p>exemplo de pergunta: Faça um check in</p>
            <p>exemplo de resposta: Eu cheguei hoje sentindo [descrever sentimento] e esperando [descrever expectativas]</p>
          </div>
        </PassoAPasso>

      </Content>

      <Link to="/configuracoes">Continuar para configurações do jogo</Link>
    </AnimationContainer>
  );
}

export default Rules;
