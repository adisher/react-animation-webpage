import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({children}) {
  return (
      <div 
        style=
        {{
          overflow: "hidden", 
          paddingTop: "120px", 
          backgroundColor: '#383b84',
          margin: "0", 
          minHeight: "100vh",
        }}
      >
        <Header/>
          {children}
        <Footer/>
      </div>
  )
}
