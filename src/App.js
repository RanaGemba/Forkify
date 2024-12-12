import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CSpinner, useColorModes } from '@coreui/react';
import './scss/style.scss';
import './scss/examples.scss';

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const StoreLogin = React.lazy(() => import('./views/pages/storeLogin/StoreLogin'));
const UserAuth = React.lazy(() => import('./views/pages/userAuth/UserAuth'));
const LandingScreen = React.lazy(() => import('./views/landingScreen/LandingScreen'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('Forkify');
  const storedTheme = useSelector((state) => state.theme);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0];

    if (storedTheme) {
      setColorMode(storedTheme);
    }

    if (isColorModeSet()) {
      return;
    }

    setColorMode(storedTheme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        {isLoggedIn ? (
          <Routes>
            <Route path="*" name="Home" element={<DefaultLayout />} />
            <Route path="/404" name="Page 404" element={<Page404 />} />
            <Route path="/500" name="Page 500" element={<Page500 />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" name="LandingScreen" element={<LandingScreen />} />
            <Route path="/admin/auth/login" name="Login Page" element={<Login />} />
            <Route path="/dashboard" name="Dashboard" element={<Dashboard />} />
            <Route path="/defaultLayout" name="DefaultLayout" element={<DefaultLayout />} />
            <Route path="/storeLogin" name="Store Login Page" element={<StoreLogin />} />
            <Route path="/store-panel/auth/login" name="User Auth Page" element={<UserAuth />} />
            <Route path="/register" name="Register Page" element={<Register />} />
            <Route path="/404" name="Page 404" element={<Page404 />} />
            <Route path="/500" name="Page 500" element={<Page500 />} />
          </Routes>
        )}
      </Suspense>
    </Router>
  );
};

export default App;
