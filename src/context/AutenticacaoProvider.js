import { useState } from 'react';
import { AutenticacaoContext } from './AutenticacaoContext';

export const AutenticacaoProvider = ({ children }) => {
  const [tema, setTema] = useState(true);

  return <AutenticacaoContext.Provider value={{ tema, setTema }}>{children}</AutenticacaoContext.Provider>;
};
