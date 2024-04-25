import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CButton,
} from "@coreui/react";
import logo from "../Assets/evp.png"; // Ensure the path to your logo is correct

function NavBar() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <>
      <CNavbar colorScheme="dark" className="bg-dark">
        <CContainer fluid>
          <CNavbarToggler
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
          />
          <COffcanvas
            id="offcanvasNavbar"
            placement="start"
            visible={visible}
            onHide={() => setVisible(false)}
          >
            <COffcanvasHeader>
              <COffcanvasTitle id="offcanvasNavbarLabel">
              <img src={logo} alt="Logo of EdVenture Park" className="navbar-logo" />
              </COffcanvasTitle>
              <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
            </COffcanvasHeader>
            <COffcanvasBody>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink href="/" active>Home</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/login" active>Login</CNavLink>
                </CNavItem>
                
              </CNavbarNav>
              <div className="mt-3">
                <CButton color="secondary" onClick={logout}>Logout</CButton>
              </div>
            </COffcanvasBody>
          </COffcanvas>
        </CContainer>
      </CNavbar>
    </>
  );
}

export default NavBar;
