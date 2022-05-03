import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

const Layout = () => {
  return (
    <nav>
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </nav>
  );
};

export default Layout;
