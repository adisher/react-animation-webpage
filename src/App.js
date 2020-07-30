import React, { useState, useEffect } from 'react';

import Layout from './components/Layout';
import Grids from './components/Grids';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(false)
  const [component, setComponent] = useState()
  console.log(component)

  useEffect(() => {
      setLoading(true);
      const timer = setTimeout( () => {
        setComponent(Loader)
        setLoading(false)
        clearTimeout(timer)
      }, 2000);
      
      
  }, []);

  return (
    <>
      {loading && <Loader/> }
      {!loading && 
        <>
        <Layout>
          <Grids />
        </Layout>
        </>
      }
    </>
  );
}
