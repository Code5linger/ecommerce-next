/* eslint-disable */
// import '@/styles/globals.css';
import '@assets/main.css';
import type { AppProps } from 'next/app';
import { FC } from 'react';

const Noop: FC = ({ children }) => <>{children}</>;

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// import '@assets/main.css';
// import 'keen-slider/keen-slider.min.css';
// import { AppProps } from 'next/app';

// import { UIProvider } from '@components/ui/context';

// const Noop: FC = ({ children }) => <>{children}</>;

// function MyApp({
//   Component,
//   pageProps,
// }: AppProps & { Component: { Layout: FC } }) {
//   const Layout = Component.Layout ?? Noop;

//   return (
//     <UIProvider>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </UIProvider>
//   );
// }

// export default MyApp;
