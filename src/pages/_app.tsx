import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';

import '@app/styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ToastContainer limit={3} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
