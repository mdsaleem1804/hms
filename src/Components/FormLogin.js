import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
} from "mdbreact";

import ProgressBarPage from "./Common/ProgressBarPage";
import AlertPage from "./Common/AlertPage";
const FormLogin = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <br />
        <br />
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>

        <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <AlertPage />
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">Welcome to Lakshmi Hospital</h3>
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text text-left">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>

                <div className="text-center mt-4">
                  <MDBBtn color="light-blue" className="mb-3" type="submit">
                    Login
                  </MDBBtn>
                </div>
                <ProgressBarPage />
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? Sign Up</p>
                  <a></a>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormLogin;
