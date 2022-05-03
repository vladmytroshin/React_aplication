import React, { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import { Route, Routes } from 'react-router-dom';
import NoMatch from '../../pages/NoMatch/NoMatch';
import Login from '../../pages/Login/Login';
import Layout from '../../Layout';
import ROUTE_LINKS from './routeLink';
import Home from '../../pages/Home/Home';

const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    isAuth
      ? (
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Login/>}/>
            <Route path={ROUTE_LINKS.login} element={<Login/>}/>
            <Route path={ROUTE_LINKS.home} element={<Home/>}/>
            <Route path={ROUTE_LINKS.exit} element={<Login/>}/>
            <Route path={ROUTE_LINKS.otherRoutes} element={<NoMatch/>}/>
          </Route>
        </Routes>
      )
      : (
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Login/>}/>
            <Route path={ROUTE_LINKS.login} element={<Login/>}/>
            <Route path={ROUTE_LINKS.otherRoutes} element={<NoMatch/>}/>
          </Route>
        </Routes>
      )
  );
};

export default AppRoutes;
