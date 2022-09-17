import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '@/components/layout/MainLayout';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import getQueryClient from '@/lib/queryClient';
import DialogProvider from '@/contexts/DialogContext';

function MyApp({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppProps<{ dehydratedState: any }>) {
  const queryClient = getQueryClient(); // Create react-query queryClient Instance

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <DialogProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </DialogProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
