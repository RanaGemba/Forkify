import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import bgImage from '../../../assets/images/assets/pasta.png';

import './../../../scss/login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      console.log('Sending login request with:', { email, password });
      const response = await axios.post('https://dev-api.forkify.co/user/login', {
        email,
        password,
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const { session_token, refresh_token } = response.data;

      // Save tokens in localStorage
      localStorage.setItem('access_token', session_token);
      localStorage.setItem('refresh_token', refresh_token);

      // Dispatch login state
      dispatch({ type: 'setLoginState', isLoggedIn: true });

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      const message =
        error.response?.data?.message || 'Invalid email or password.';
      setErrorMessage(message);
    }
  };

  return (
    <div className="login-container">
      <CContainer fluid className="login-wrapper">
        <CRow className="login-row">
          <CCol md={6} className="image-section">
            <img src={bgImage} alt="Welcome" className="image" />
          </CCol>
          <CCol md={6} className="form-section">
            <div className="form-content">
              <h1 className="brand-title">🍔Forkify</h1>
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
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

                    <CButton className="login-button" onClick={handleLogin}>
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
  );
};

export default Login;
