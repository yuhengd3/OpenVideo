import '../styles/globals.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Grommet } from 'grommet';
import { DebugContext } from '../context/DebugContext';

import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import { AuthContextProvider } from '../context/authContext'
import ProtectedRoute from '../components/ProtectedRoute'

export const API_KEY: String = 'KEY01822BBC3492B735E443F3254E85E21B_pfICNYBVMy5fr8GyMuYZwU';

const noAuthRequired = ['/login', '/signup']

function MyApp({ Component, pageProps }: AppProps) {
  const [debugState, setDebugState] = React.useState(null);
  const router = useRouter()


  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, [])

  const App = (
    <AuthContextProvider>
    <Grommet full plain style={{ position: 'relative' }}>
      <DebugContext.Provider value={[debugState, setDebugState]}>
      { noAuthRequired.includes(router.pathname) ? (
      <Component {...pageProps} />
    ): (
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    )}
      </DebugContext.Provider>
    </Grommet>
    </AuthContextProvider>
  );

  return App;
}

export default MyApp
