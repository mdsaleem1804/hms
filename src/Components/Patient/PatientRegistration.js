import React, { useState, useEffect } from "react";

import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import Helper from "../Common/Helper";
import { InputHook } from "../Common/InputHook";
import { useHistory } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
const PatientRegistration = () => {
  const [Subject, setSubject] = useState([]);
  const history = useHistory();

  const [message, setMessage] = useState("");
  const {
    value: subjectCode,
    bind: bindSubjectCode,
    reset: resetSubjectCode,
  } = InputHook("");
  const {
    value: subjectName,
    bind: bindSubjectName,
    reset: resetSubjectName,
  } = InputHook("");
  const [Loading, setLoading] = useState(false);
  function Success(response) {
    setMessage(response.message);
    //history.push("/PatientList");
  }
  function Fail() {
    setMessage("Record Not Created");
    setLoading(false);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    setMessage("");
    fetch(Helper.getUrl() + "subject", {
      method: "POST",
      body: JSON.stringify({
        subject_code: subjectCode,
        subject_name: subjectName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        response.message === "Subject successfully added"
          ? Success(response)
          : Fail();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setMessage("Server Error.");
        setLoading(false);
      });

    resetSubjectCode();
    resetSubjectName();
    //window.location.reload(false);
  };

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(Helper.getUrl() + "subject");
        const json = await response.json();
        setSubject(json.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  let alert, button;
  if (message === "") {
  } else {
    alert = (
      <Alert variant="filled" severity="warning">
        {message}
      </Alert>
    );
  }
  if (Loading) {
    button = (
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled
        >
          Save
        </Button>

        <LinearProgress color="secondary" />
      </div>
    );
  } else {
    button = (
      <Button type="submit" fullWidth variant="contained" color="primary">
        Save
      </Button>
    );
  }
  return (
    <div style={{ padding: 30 }}>
      <form className="needs-validation" onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              name="subject_code"
              type="text"
              id="subject_code"
              label="SubjectCode"
              required
              {...bindSubjectCode}
            ></MDBInput>
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="subject_name"
              type="text"
              id="subject_name"
              label="SubjectName"
              required
              {...bindSubjectName}
            ></MDBInput>
          </MDBCol>
          <MDBCol md="2">{button}</MDBCol>
        </MDBRow>
        <hr />
        {alert}
      </form>
    </div>
  );
};

export default PatientRegistration;
