import { AppProps } from 'next/app';
import { LoadingProvider, useLoading } from '../context/LoadingContext';
import Loading from '../components/Loading';

import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}

const AppWrapper = (props: AppProps) => (
  <LoadingProvider>
    <MyApp {...props} />
  </LoadingProvider>
);

export default AppWrapper;