import React from "react";
import {
  MDBRow,
  MDBNavbar,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarNav,
} from "mdbreact";

export const Header = () => (
  <MDBRow className={"header-row"}>
    <MDBNavbar expand="md">
      <MDBNavbarNav>
        <MDBNavItem>
          <MDBNavLink to={"/PatientList"}>Home</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>

      <MDBNavbarNav right className={"align-items-center"}>
        <MDBNavItem>
          <MDBNavLink className={"align-self-center"} to="/PatientRegistration">
            Login
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  </MDBRow>
);
