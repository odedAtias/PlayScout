// React imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Third party libraries imports
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
// FS imports
import { theme } from 'style';
import { router } from 'routes';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </ChakraProvider>
    </StrictMode>
  </QueryClientProvider>
)
