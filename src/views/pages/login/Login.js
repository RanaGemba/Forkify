import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import bgImage from '../../../assets/images/assets/pasta.png'


import './../../../scss/login.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async () => {
    try {
      const response = await axios.post('/user/token', {
        grant_type: 'password',
        username: username,
        password: password,
        scope: '',
        client_id: 'your-client-id', 
        client_secret: 'your-client-secret', 
      })

      const { access_token, refresh_token } = response.data

      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)

      dispatch({ type: 'setLoginState', isLoggedIn: true })

      navigate('/dashboard') 

    } catch (error) {
      setErrorMessage('Invalid username or password.')
    }
  }

  return (
    <div className="login-container">
      <CContainer fluid className="login-wrapper">
        <CRow className="login-row">
          
          <CCol md={6} className="image-section">
            <img src={bgImage} alt="Welcome" className="image" />
          </CCol>

          
          <CCol md={6} className="form-section">
            <div className="form-content">
              
              <h1 className="brand-title">Forkify</h1>
              
              
              <CCard className="form-card">
                <CCardBody>
                  <CForm>
                    <h2 className="form-title">Admin Sign in</h2>
                    <p className="form-subtitle">
                      Want to login to your store account?{' '}
                      <span 
                        onClickCapture={() => navigate('/store-panel/auth/login')} 
                        className="store-login-link"
                      >
                        Store Login
                      </span>
                    </p>

                    
                    {errorMessage && (
                      <div className="error-message">
                        <p>{errorMessage}</p>
                      </div>
                    )}

                    
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </CInputGroup>

                   
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>

                    
                    <CButton 
                      className="login-button" 
                      onClick={handleLogin}
                    >
                      Login
                    </CButton>
                  </CForm>
                </CCardBody>
              </CCard>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
