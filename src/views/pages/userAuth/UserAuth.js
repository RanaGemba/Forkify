import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CRow } from '@coreui/react';
import React from 'react';
import bgImage from '../../../assets/images/assets/pasta.png';
import { useNavigate } from 'react-router-dom';
import './../../../scss/login.scss'

const UserAuth = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <CContainer fluid className="login-wrapper">
        <CRow className="login-row">
          
          <CCol md={7} className="image-section">
            <img src={bgImage} alt="Welcome" className="image" />
          </CCol>

          
          <CCol md={5} className="form-section">
            <div className="form-content">
              
              <h1 className="brand-title">Forkify</h1>

              
              <CCard className="form-card">
                <CCardBody>
                  <CForm>
                    <h2 className="form-title">Store Sign in</h2>
                    <p className="form-subtitle">
                      Want to login to your admin account?{' '}
                      <span
                        onClick={() => navigate(-1)}
                        className="store-login-link"
                      >
                        Admin Login
                      </span>
                    </p>
                    <CButton
                      className="login-button"
                      onClickCapture={() =>
                        navigate('/storeLogin', { state: { userRole: 'owner' } })
                      }
                    >
                      Sign in as Store Owner
                    </CButton>
                    <CButton
                      className="login-button"
                      onClickCapture={() =>
                        navigate('/storeLogin', { state: { userRole: 'employee' } })
                      }
                    >
                      Sign in as Store Employee
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

export default UserAuth;