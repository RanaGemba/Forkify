import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CRow } from '@coreui/react';
import React from 'react';
import bgImage from '../../../assets/images/assets/pasta.png';
import { useNavigate } from 'react-router-dom';

const UserAuth = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <CContainer fluid className="login-wrapper">
        <CRow className="login-row">
          {/* Left Side - Image Section */}
          <CCol md={7} className="image-section">
            <img src={bgImage} alt="Welcome" className="image" />
          </CCol>

          {/* Right Side - Form Section */}
          <CCol md={5} className="form-section">
            <div className="form-content">
              {/* Logo / Title */}
              <h1 className="brand-title">Forkify</h1>

              {/* Login Form */}
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
          margin-bottom: 20px;
        }

        .login-button:hover {
          background-color:rgb(244, 246, 245);
        }

        @media (max-width: 767px) {
          .form-section {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default UserAuth;