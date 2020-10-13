import React, { useCallback, useState } from 'react';
import { Container, Help } from './styles';

const Sidebar: React.FC = () => {
  const [helpCounter, setHelpCounter] = useState<number>(2);

  const handleHelpDescrease = useCallback(() => {
    const finalValue = helpCounter - 1;
    setHelpCounter(finalValue);
  }, [setHelpCounter, helpCounter]);

  const handleHelpIncrease = useCallback(() => {
    const finalValue = helpCounter + 1;
    setHelpCounter(finalValue);
  }, [setHelpCounter, helpCounter]);

  return (
    <Container>
      <Help>
        <h2>ajuda dos convidados</h2>
        <div>
          <button onClick={handleHelpDescrease}>-</button>
          <span>{helpCounter}</span>
          <button onClick={handleHelpIncrease}>+</button>
        </div>
      </Help>
    </Container>
  );
}

export default Sidebar;
