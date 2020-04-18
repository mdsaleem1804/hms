import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import PatientList from "./PatientList";
class PatientRegistration extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    options: [
      {
        text: "Option 1",
        value: "1",
      },
      {
        text: "Option 2",
        value: "2",
      },
      {
        text: "Option 3",
        value: "3",
      },
    ],
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getPickerValue = (value) => {
    console.log(value);
  };
  render() {
    return (
      <div style={{ padding: 30 }}>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                required
              ></MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.lname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="Last name"
                required
              ></MDBInput>
            </MDBCol>
            <MDBCol md="2">
              <MDBBtn color="success" type="submit">
                Submit Form
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr />
        </form>
        <PatientList />
      </div>
    );
  }
}

export default PatientRegistration;
