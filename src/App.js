import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// We use those styles to show code examples, you should remove them in your application.
import './scss/examples.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const StoreLogin = React.lazy(() => import('./views/pages/storeLogin/StoreLogin'))
const UserAuth = React.lazy(() => import('./views/pages/userAuth/UserAuth'))
const LandingScreen = React.lazy(() => import('./views/landingScreen/LandingScreen'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('Forkify')
  
  const storedTheme = useSelector((state) => state.theme)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  // const [isLoggedIn, setIsLoggedIn] = useState(false)
 
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
   
   console.log('theme => ', storedTheme)
   
    if (storedTheme) {
      setColorMode(storedTheme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        {
          isLoggedIn ? 
          <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
          {/* <Route exact path="/dashboard" name="Dashboard" element={<Dashboard />} /> */}
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
        </Routes>
        : <Routes>
        <Route exact path="/*" name="LandingScreen" element={<LandingScreen />} />
        <Route exact path="/dashboard" name="Dashboard" element={<Dashboard />} />
        <Route exact path="/defaultLayout" name="DefaultLayout" element={<DefaultLayout />} />
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/storeLogin" name="Store Login Page" element={<StoreLogin />} />
        <Route exact path="/userAuth" name="Store Login Page" element={<UserAuth />} />
        <Route exact path="/register" name="Register Page" element={<Register />} />
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
      </Routes>
        }
        {/* <Routes>
          <Route exact path="/*" name="DefaultLayout" element={<DefaultLayout />} />
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/defaultLayout" name="DefaultLayout" element={<DefaultLayout />} />
          <Route exact path="/storeLogin" name="Store Login Page" element={<StoreLogin />} />
          <Route exact path="/dashboard" name="Dashboard" element={<Dashboard />} />
          <Route exact path="/userAuth" name="Store Login Page" element={<UserAuth />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
        </Routes> */}
      </Suspense>
    </HashRouter>
  )
}

export default App
