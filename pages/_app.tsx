import '../styles/globals.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Grommet } from 'grommet';
import { DebugContext } from '../context/DebugContext';

export const API_KEY: String = 'KEY01822BBC3492B735E443F3254E85E21B_pfICNYBVMy5fr8GyMuYZwU';

function MyApp({ Component, pageProps }: AppProps) {
  const [debugState, setDebugState] = React.useState(null);


  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, [])

  const App = (
    <Grommet full plain style={{ position: 'relative' }}>
      <DebugContext.Provider value={[debugState, setDebugState]}>
        <Component {...pageProps} />
      </DebugContext.Provider>
    </Grommet>
  );

  return App;
}

export default MyApp
