import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'

import Layout from './components/Layout';
import Grids from './components/Grids';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(false)
  const [component, setComponent] = useState()
  
  useEffect(() => {
      setLoading(true);

      const timer = setTimeout( () => {
        setComponent(Loader);
        setLoading(false)
      }, 2000);
      return () => clearTimeout(timer)
  }, []);

  return (
    <>
      {loading && <Loader/> }
      {!loading && 
        <>
        <CssBaseline />
        <Layout>
          <Grids />
        </Layout>
        </>
      }
    </>
  );
}
