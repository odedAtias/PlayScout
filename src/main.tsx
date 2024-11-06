// React imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Third party libraries imports
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
// FS imports
import App from './App.tsx';
import theme from './style/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>,
)
