// import React from 'react'
// import { Link } from 'react-router-dom'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import { useNavigate } from 'react-router-dom'

// import bgImage from '../../../assets/images/assets/pasta.png'
// import { useDispatch } from 'react-redux'

// const Login = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   return (
//     <div className="login-container">
//       <CContainer fluid className="login-wrapper">
//         <CRow className="login-row">
//           {/* Left Side - Image Section */}
//           <CCol md={6} className="image-section">
//             <img src={bgImage} alt="Welcome" className="image" />
//           </CCol>

//           {/* Right Side - Form Section */}
//           <CCol md={6} className="form-section">
//             <div className="form-content">
//               {/* Logo / Title */}
//               <h1 className="brand-title">Forkify</h1>
              
//               {/* Login Form */}
//               <CCard className="form-card">
//                 <CCardBody>
//                   <CForm>
//                     <h2 className="form-title">Admin Sign in</h2>
//                     <p className="form-subtitle">
//                       Want to login to your store account?{' '}
//                       <span 
//                         onClickCapture={() => navigate('/store-panel/auth/login')} 
//                         className="store-login-link"
//                       >
//                         Store Login
//                       </span>
//                     </p>
                    
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <CIcon icon={cilUser} />
//                       </CInputGroupText>
//                       <CFormInput placeholder="Username" autoComplete="username" />
//                     </CInputGroup>

//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <CIcon icon={cilLockLocked} />
//                       </CInputGroupText>
//                       <CFormInput type="password" placeholder="Password" autoComplete="current-password" />
//                     </CInputGroup>

//                     <CButton 
//                       className="login-button" 
//                       onClick={() => dispatch({ type: 'setLoginState', isLoggedIn: true })}
//                     >
//                       Login
//                     </CButton>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//             </div>
//           </CCol>
//         </CRow>
//       </CContainer>

//       {/* Styles */}
//       <style jsx>{`
//         .login-container {
//           background: linear-gradient(to top, #FFB6C1, #FFD700);
//           min-height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .login-wrapper {
//           max-width: 1200px;
//           width: 100%;
//         }

//         .login-row {
//           display: flex;
//           min-height: 100vh;
//           align-items: center;
//         }

//         .image-section {
//           display: none;
//           justify-content: center;
//           align-items: center;
//         }

//         @media (min-width: 768px) {
//           .image-section {
//             display: flex;
//           }
//         }

//         .image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
// \        }

//         .form-section {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: rgba(255, 255, 255, 0.9);
//           padding: 40px;
//           border-radius: 15px;
//         }

//         .form-content {
//           width: 100%;
//           max-width: 400px;
//           text-align: center;
//         }

//         .brand-title {
//           font-size: 2.5rem;
//           color: #333;
//           font-weight: bold;
//           margin-bottom: 20px;
//         }

//         .form-card {
//           border: none;
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//           border-radius: 15px;
//         }

//         .form-title {
//           font-size: 1.8rem;
//           font-weight: bold;
//           color: #0E5020;
//           margin-bottom: 20px;
//         }

//         .form-subtitle {
//           font-size: 1rem;
//           color: #9E9C9C;
//           margin-bottom: 30px;
//         }

//         .store-login-link {
//           color: #0E5020;
//           text-decoration: underline;
//           cursor: pointer;
//         }

//         .login-button {
//           background-color: #0E5020;
//           color: white;
//           width: 100%;
//           padding: 14px;
//           border-radius: 25px;
//           font-size: 1.2rem;
//           transition: background-color 0.3s ease;
//           border: none;
//         }

//         .login-button:hover {
//           background-color: #0C3E18;
//         }

//         @media (max-width: 767px) {
//           .form-section {
//             padding: 25px;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }

// export default Login;


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
        client_id: 'your-client-id', // Replace with actual client_id
        client_secret: 'your-client-secret', // Replace with actual client_secret
      })

      const { access_token, refresh_token } = response.data

      // Store the tokens in localStorage for later use
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)

      // Set login state in Redux store (if using Redux for state management)
      dispatch({ type: 'setLoginState', isLoggedIn: true })

      // Redirect to the dashboard or another protected page
      navigate('/dashboard') // Update the path as per your application structure

    } catch (error) {
      // If login fails, display an error message
      setErrorMessage('Invalid username or password.')
    }
  }

  return (
    <div className="login-container">
      <CContainer fluid className="login-wrapper">
        <CRow className="login-row">
          {/* Left Side - Image Section */}
          <CCol md={6} className="image-section">
            <img src={bgImage} alt="Welcome" className="image" />
          </CCol>

          {/* Right Side - Form Section */}
          <CCol md={6} className="form-section">
            <div className="form-content">
              {/* Logo / Title */}
              <h1 className="brand-title">Forkify</h1>
              
              {/* Login Form */}
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

                    {/* Error Message */}
                    {errorMessage && (
                      <div className="error-message">
                        <p>{errorMessage}</p>
                      </div>
                    )}

                    {/* Username Input */}
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

                    {/* Password Input */}
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

                    {/* Login Button */}
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

      {/* Styles */}
      <style jsx>{`
        .login-container {
          background: linear-gradient(to top, #FFB6C1, #FFD700);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-wrapper {
          max-width: 1200px;
          width: 100%;
        }

        .login-row {
          display: flex;
          min-height: 100vh;
          align-items: center;
        }

        .image-section {
          display: none;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 768px) {
          .image-section {
            display: flex;
          }
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .form-section {
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.9);
          padding: 40px;
          border-radius: 15px;
        }

        .form-content {
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .brand-title {
          font-size: 2.5rem;
          color: #333;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .form-card {
          border: none;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
        }

        .form-title {
          font-size: 1.8rem;
          font-weight: bold;
          color: #0E5020;
          margin-bottom: 20px;
        }

        .form-subtitle {
          font-size: 1rem;
          color: #9E9C9C;
          margin-bottom: 30px;
        }

        .store-login-link {
          color: #0E5020;
          text-decoration: underline;
          cursor: pointer;
        }

        .login-button {
          background-color: #0E5020;
          color: white;
          width: 100%;
          padding: 14px;
          border-radius: 25px;
          font-size: 1.2rem;
          transition: background-color 0.3s ease;
          border: none;
        }

        .login-button:hover {
          background-color:rgb(244, 246, 245);
        }

        .error-message {
          color: red;
          margin-bottom: 15px;
          font-size: 1rem;
        }

        @media (max-width: 767px) {
          .form-section {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  )
}

export default Login;