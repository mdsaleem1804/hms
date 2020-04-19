import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  logOut(e) {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "./#/";
  }
  render() {
    return (
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">HMS</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          {!localStorage.usertoken ? (
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to={"/SignIn"}>SignIn</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          ) : (
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to="#!">
                  <MDBIcon icon="home" />
                  Dashboard
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to={"/PatientRegistration"}>
                  <MDBIcon icon="user-plus" />
                  PatientRegistration
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to={"/PatientList"}>
                  <MDBIcon icon="table" />
                  PatientList
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to={"/SignIn"} onClick={this.logOut.bind(this)}>
                  <MDBIcon icon="sign-out-alt" />
                  Logout
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
