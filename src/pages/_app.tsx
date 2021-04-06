import type { AppProps } from 'next/app';

import 'normalize.css';
import { Provider } from 'react-redux';
import store from '../context/store';
import '../styles/global/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
