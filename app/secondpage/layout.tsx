import React from 'react';
import Navbar from '../components/componentssec/Navbar';
import Footer from '../components/componentssec/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      

      <main>
        <Navbar />
        {children}
        <Footer />
      </main>

      
    </div>
  );
};

export default Layout;