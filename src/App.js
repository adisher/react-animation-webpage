import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'

import Layout from './components/Layout';
import Grids from './components/Grids';

export default function App() {
  
  return (
    <>
    <CssBaseline />
      <Layout>
        <Grids />
      </Layout>
    </>
  );
}
