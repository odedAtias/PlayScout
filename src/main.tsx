// React imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Third party libraries imports
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Provider } from 'react-redux';
// FS imports
import App from './App.tsx';
import theme from './style/theme.ts';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </StrictMode>,
  </Provider>,
)
