// React imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Third party libraries imports
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// FS imports
import App from './App.tsx';
import theme from './style/theme.ts';
import GamesParamsContextProvider from './context/gamesParams/GamesParamsContextProvider.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <GamesParamsContextProvider>
      <StrictMode>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
          <ReactQueryDevtools />
        </ChakraProvider>
      </StrictMode>
    </GamesParamsContextProvider>
  </QueryClientProvider>
)
