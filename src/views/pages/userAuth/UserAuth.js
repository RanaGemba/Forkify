import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CRow } from '@coreui/react'
import React from 'react'

import bgImage from '../../../assets/images/assets/pasta.png'
import { useNavigate } from 'react-router-dom'

const UserAuth = () => {

  const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: 'green', minHeight: '100vh', width: '100%' }}>
      <CContainer fluid className="w-100" style={{ minHeight: '100vh', padding: 0 }}>
        {/* Set backgroundColor on CRow to make sure pink covers the full screen */}
        <CRow className="w-100" style={{ minHeight: '100vh', backgroundColor: 'pink', margin: 0 }}>
          <CCol
            md={7} // Image column takes 60% width on medium screens and larger
            className="d-none d-md-flex align-items-center justify-content-center p-0 m-0"
            style={{ backgroundColor: 'primary' }} // Optional, since you want the image to fully cover
          >
            <img
              src={bgImage}
              alt="Descriptive Text"
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover', maxHeight: '100vh', maxWidth: '100vw' }}
            />
          </CCol>

          <CCol
            md={5} // Login form column takes 40% width on medium screens and larger
            className="d-flex flex-column "
            style={{ backgroundColor: 'white', padding: '20px', minHeight: '100vh' }}
          >
            {/* Top Section - Title */}
            <div>
              <h1 style={{ color: '#0E5020' }}>Forkify</h1>
            </div>

            {/* Center Section - Login Form */}
            <div className="w-100 d-flex justify-content-center" style={{ marginTop: 'auto' }}>
              <CCard className="p-4 w-100" style={{ backgroundColor: 'white', borderWidth: 0 }}>
                <CCardBody>
                  <CForm>
                    <p
                      style={{
                        color: 'black',
                        fontSize: 20,
                        marginBottom: 0,
                        fontWeight: 'bolder',
                      }}
                    >
                      {'Store Sign in'}
                    </p>
                    <p style={{ color: '#9E9C9C', marginBottom: 40 }}>
                      {'Want to login in to your admin account? '}
                      <a
                        onClick={() => navigate(-1)}
                        style={{ color: '#0E5020', textDecoration: 'underline' }}
                      >
                        Admin Login
                      </a>
                    </p>
                    <CButton
                      style={{
                        borderColor: '#0E5020',
                        color: '#0E5020',
                        width: '100%',
                        marginBottom: 25,
                      }}
                      className="px-4"
                      onClickCapture={() => navigate('/storeLogin', { state: { userRole: 'owner' } })}
                    >
                      Sign in as Store Owner
                    </CButton>
                    <CButton
                      style={{ borderColor: '#0E5020', color: '#0E5020', width: '100%' }}
                      className="px-4"
                      onClickCapture={() => navigate('/storeLogin', { state: { userRole: 'employee' } })}
                    >
                      Sign in as Store Employee{' '}
                    </CButton>
                  </CForm>
                </CCardBody>
              </CCard>
            </div>

            <div className="text-center" style={{ marginBottom: 'auto' }}></div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default UserAuth
