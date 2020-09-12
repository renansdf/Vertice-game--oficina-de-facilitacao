import React from 'react';

import { AnimationContainer, Content } from './styles';
import { Link } from 'react-router-dom';

const Rules: React.FC = () => {
  return (
    <AnimationContainer>
      <Content>
        <div>
          <h1>A colheita</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet lectus eget scelerisque euismod. Nulla sagittis arcu et arcu congue faucibus. Nullam vestibulum blandit augue, ut malesuada libero fringilla sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non diam volutpat, porta enim a, egestas ante. Sed feugiat dui nisi, ut tempus urna euismod ac. In faucibus ante id porttitor vulputate. Duis vel tristique ante. Nullam augue enim, luctus quis commodo ut, tristique nec risus. Aliquam pretium ligula ac ligula accumsan, id dignissim mi rhoncus. Duis maximus erat eget augue posuere eleifend. Nam dui ligula, viverra sit amet tincidunt eget, egestas vel nisi.
          </p>
          <p>
            Etiam id eros placerat, egestas lacus at, eleifend orci. Maecenas id porttitor sem. Etiam sem eros, semper vel sem at, faucibus egestas sapien. Nunc aliquet libero sed tortor facilisis faucibus. Sed finibus velit eget metus rhoncus, eu pharetra tortor porttitor. Phasellus sed magna cursus, maximus nisl ac, porta dui. Phasellus suscipit placerat luctus. Phasellus vitae sapien a leo tincidunt vehicula eu vel velit. Sed interdum, odio sit amet aliquam feugiat, nulla ex lobortis urna, a tristique eros magna ac leo. Donec id tristique risus, non facilisis neque. Proin lectus dui, faucibus consequat lobortis eu, efficitur vel massa. Pellentesque at ligula in justo vehicula sodales sit amet in ipsum. Quisque nec purus tellus.
          </p>

          <p>
            Donec commodo ante tellus, quis faucibus mauris pellentesque vitae. In libero nulla, faucibus eget lobortis ac, pharetra eget nunc. Aenean vitae nisl non dui sodales porttitor vitae a massa. Suspendisse mattis, nulla consectetur varius elementum, arcu dolor venenatis sapien, nec blandit sapien sem non ex. Phasellus sodales accumsan lacus, vitae tincidunt erat. Aliquam tincidunt ex nec laoreet pretium. Proin id libero dapibus, fermentum nulla a, placerat diam. Aliquam vel consectetur magna, sit amet lacinia est. In semper vitae turpis eu mattis. Vestibulum laoreet commodo dui non congue.
          </p>

          <p>
            Sed nisi tortor, hendrerit in pretium at, lobortis in lectus. Nullam molestie diam nec eros imperdiet, faucibus suscipit ante pretium. Cras vehicula quam lectus, ac viverra urna tempor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed elementum erat sit amet ligula tempus fringilla. Aliquam massa justo, fringilla eget nisi sit amet, tincidunt rutrum ligula. Vivamus id ligula vel ligula rutrum tristique sit amet sit amet nibh. Integer tincidunt, velit non hendrerit finibus, ante mauris efficitur purus, sed aliquet erat ipsum condimentum neque. Vestibulum venenatis eget mi sit amet convallis. Nam auctor, ex et dapibus euismod, enim diam dignissim mauris, iaculis tristique neque eros ac odio.
          </p>

          <p>
            Integer ut ipsum gravida augue consectetur congue. Nam nisi nunc, malesuada eu orci vehicula, ultrices consequat enim. Fusce sed hendrerit sem. Quisque finibus blandit elementum. Maecenas euismod pulvinar euismod. Donec tincidunt rhoncus fringilla. Sed pretium ex ut tempor tempus.
          </p>
        </div>

        <div>
          <strong>Regras:</strong>
          <p>
            Integer ut ipsum gravida augue consectetur congue. Nam nisi nunc, malesuada eu orci vehicula, ultrices consequat enim. Fusce sed hendrerit sem. Quisque finibus blandit elementum. Maecenas euismod pulvinar euismod. Donec tincidunt rhoncus fringilla. Sed pretium ex ut tempor tempus.
          </p>

          <strong>Elementos:</strong>
          <p>
            Donec commodo ante tellus, quis faucibus mauris pellentesque vitae. In libero nulla, faucibus eget lobortis ac, pharetra eget nunc. Aenean vitae nisl non dui sodales porttitor vitae a massa. Suspendisse mattis, nulla consectetur varius elementum, arcu dolor venenatis sapien, nec blandit sapien sem non ex. Phasellus sodales accumsan lacus, vitae tincidunt erat. Aliquam tincidunt ex nec laoreet pretium. Proin id libero dapibus, fermentum nulla a, placerat diam. Aliquam vel consectetur magna, sit amet lacinia est. In semper vitae turpis eu mattis. Vestibulum laoreet commodo dui non congue.
          </p>

          <p>
            Sed nisi tortor, hendrerit in pretium at, lobortis in lectus. Nullam molestie diam nec eros imperdiet, faucibus suscipit ante pretium. Cras vehicula quam lectus, ac viverra urna tempor a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed elementum erat sit amet ligula tempus fringilla. Aliquam massa justo, fringilla eget nisi sit amet, tincidunt rutrum ligula. Vivamus id ligula vel ligula rutrum tristique sit amet sit amet nibh. Integer tincidunt, velit non hendrerit finibus, ante mauris efficitur purus, sed aliquet erat ipsum condimentum neque. Vestibulum venenatis eget mi sit amet convallis. Nam auctor, ex et dapibus euismod, enim diam dignissim mauris, iaculis tristique neque eros ac odio.
          </p>
        </div>
      </Content>

      <Link to="/configuracoes">Continuar para configurações do jogo</Link>
    </AnimationContainer>
  );
}

export default Rules;
