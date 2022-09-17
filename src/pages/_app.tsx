import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '@/components/layout/MainLayout';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import getQueryClient from '@/lib/queryClient';

function MyApp({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppProps<{ dehydratedState: any }>) {
  // Create react-query queryClient Instance
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
