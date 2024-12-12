import React, { useState, useEffect } from 'react';
import {
  CButton,
  CContainer,
  CRow,
  CCol,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CImage,
  CForm,
  CFormInput,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import homeBanner from '../../assets/images/assets/homeBanner.png';
import homeBannerCover from '../../assets/images/assets/homeBannerCover.png';
import dummy from '../../assets/images/assets/dummy.png';
import appleBtn from '../../assets/images/assets/appleBtn.png';
import googleBtn from '../../assets/images/assets/googleBtn.png';
import forkifyMobile from '../../assets/images/assets/forkifyMobile.png';
import { useNavigate } from 'react-router-dom';

const collections = [
  {
    id: '1',
    imageUrl: dummy,
    title: 'Restaurant 1',
    rating: 4.2,
    foodType: 'Italian, Pizza',
    price: '₹1220 for two',
    address: '123 Street, City',
    distance: '4.2 km',
  },
  {
    id: '2',
    imageUrl: dummy,
    title: 'Restaurant 2',
    rating: 4.2,
    foodType: 'Chinese, Noodles',
    price: '₹1220 for two',
    address: '456 Avenue, City',
    distance: '4.2 km',
  },
];

const LandingScreen = () => {

  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  // Update `isMobile` on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderCollections = () => (
    <CContainer className="py-5">
      <h2 className="mb-4">Collections</h2>
      <p className="mb-4">Explore curated lists of top restaurants, cafes and much more based on trends</p>
      <CRow>
        {collections.map((item) => (
          <CCol key={item.id} md={4} className="mb-4">
            <CCard>
              <CImage src={item.imageUrl} className="card-img-top" />
              <CCardBody>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <CCardTitle>{item.title}</CCardTitle>
                  <span className="badge bg-success">{item.rating} ★</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <CCardText className="text-muted">{item.foodType}</CCardText>
                  <CCardText className="fw-bold">{item.price}</CCardText>
                </div>
                <div className="d-flex justify-content-between">
                  <CCardText className="text-muted">{item.address}</CCardText>
                  <CCardText className="fw-bold">{item.distance}</CCardText>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </CContainer>
  );

  const renderShareApp = () => (
    <CContainer fluid className="bg-light py-5">
      <CRow className="align-items-center justify-content-center">
        <CCol md={4} className="text-center">
          <CImage
            src={forkifyMobile}
            className="img-fluid mb-4"
            style={{ maxHeight: '400px' }}
          />
        </CCol>
        <CCol md={6}>
          <h2 className="mb-3">Get the Forkify app</h2>
          <p className="mb-4">
            We will send you a link, open it on your phone to download the app
          </p>
          <CForm className="mb-4">
            <div className="input-group">
              <CFormInput type="email" placeholder="Email" className="form-control" />
              <CButton color="success">Share app link</CButton>
            </div>
          </CForm>
          <p className="text-muted mb-3">Download app from</p>
          <div className="d-flex">
            <CButton color="link" className="me-3">
              <CImage src={appleBtn} className="img-fluid" style={{ maxHeight: '40px' }} />
            </CButton>
            <CButton color="link">
              <CImage src={googleBtn} className="img-fluid" style={{ maxHeight: '40px' }} />
            </CButton>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  );

  return (
    <div>
      {/* View Section */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '450px',
          backgroundImage: `url(${homeBannerCover}), url(${homeBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
              {/* Header */}
              <header
  className="p-3 text-white"
  style={{
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
    position: 'absolute',
    zIndex: 9999
  }}
> 
      <CContainer fluid>
          <CRow className="align-items-center justify-content-between">
            <CCol xs="auto">
              <a
                href="#"
                className="text-warning text-decoration-none"
                style={{ fontWeight: '500', cursor: 'pointer', position: 'relative' }}
              >
                Get the App
                <span
                  style={{
                    display: 'block',
                    height: '2px',
                    backgroundColor: '#ffc107',
                    width: '100%',
                    position: 'absolute',
                    bottom: '-3px',
                    zIndex: 999
                  }}
                ></span>
              </a>
            </CCol>
            <CCol xs="auto">
              <nav className="d-inline-flex gap-3 align-items-center">
                {isMobile ? (
                  <CDropdown>
                    <CDropdownToggle color="light" variant="ghost">
                      Menu
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Home</CDropdownItem>
                      <CDropdownItem>Products</CDropdownItem>
                      <CDropdownItem>Restaurant Login</CDropdownItem>
                      <CDropdownItem>Order Food Online</CDropdownItem>
                      <CDropdownItem onClick={() => navigate('admin/auth/login')}>Sign In</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                ) : (
                  <>
                    <CButton color="light" variant="ghost">
                      Home
                    </CButton>
                    <CButton color="light" variant="ghost">
                      Products
                    </CButton>
                    <CButton color="light" variant="ghost">
                      Restaurant Login
                    </CButton>
                    <CButton color="light" variant="ghost">
                      Order Food Online
                    </CButton>
                    <CButton onClick={() => navigate('admin/auth/login')} color="light" variant="ghost">
                      Sign In
                    </CButton>
                  </>
                )}
              </nav>
            </CCol>
          </CRow>
        </CContainer>
      </header>
        <CContainer
          className="d-flex justify-content-center align-items-center text-center"
          style={{
            height: '100%',
            color: 'white',
            position: 'relative',
            zIndex: 0,
          }}
        >
          <div>
            <h1 className="display-3" style={{ fontFamily: "'Forkify', sans-serif" }}>
              Forkify
            </h1>
            <h3 className="mb-4">
              Delivering Digital Solutions for Restaurants and Retail Stores Canada & USA
            </h3>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for restaurant, cuisine, or dish"
              />
              <div className="input-group-append">
                <span className="input-group-text">🔍</span>
              </div>
            </div>
          </div>
        </CContainer>
      </section>

      {/* Collections and Share App */}
      {renderCollections()}
      {renderShareApp()}
    </div>
  );
};

export default LandingScreen;
