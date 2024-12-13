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

import bgImage from '../../../assets/images/assets/pasta.png'
import './../../../scss/login.scss'

const StoreLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isOwner, setIsOwner] = useState(true)

  const toggleLoginRole = () => {
    setIsOwner(!isOwner)
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

              <h1 className="brand-title">🍔Forkify</h1>
              

              <CCard className="form-card">
                <CCardBody>
                  <CForm>
                    <h2 className="form-title">{isOwner ? 'Store Owner Sign in' : 'Store Employee Sign in'}</h2>
                    <p className="form-subtitle">
                      Want to login to your admin account?{' '}
                      <span
                        onClickCapture={() => navigate('/admin/auth/login')}
                        className="store-login-link"
                      >
                        Admin Login
                      </span>
                    </p>
                    
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>

                    <CButton
                      className="login-button"
                      onClick={() => {
                        dispatch({ type: 'setLoginState', isLoggedIn: true })
                        navigate('/dashboard')
                      }}
                    >
                      Login
                    </CButton>
                    <p className="form-subtitle">
                      {isOwner ? 'Login as Store Employee? ' : 'Login as Store Owner? '}
                      <span
                        onClickCapture={toggleLoginRole}
                        className="store-login-link"
                      >
                        {isOwner ? 'Login here' : 'Login here'}
                      </span>
                    </p>
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

export default StoreLogin
