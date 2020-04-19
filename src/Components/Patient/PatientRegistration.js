import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import Helper from "../Common/Helper";
import { InputHook } from "../Common/InputHook";
const PatientRegistration = () => {
  const [Subject, setSubject] = useState([]);
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
  const handleSubmit = (evt) => {
    evt.preventDefault();
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
      .then((json) => console.log(json));
    resetSubjectCode();
    resetSubjectName();
    window.location.reload(false);
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
  function deleteSubject(id) {
    fetch(Helper.getUrl() + "subject", {
      method: "DELETE",
      body: JSON.stringify({
        subject_id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => window.location.reload(false));
  }
  function editSubject(singleSubject) {
    // setSubjectName(singleSubject.subject_name);
    console.log(singleSubject);
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
          <MDBCol md="2">
            <MDBBtn color="success" type="submit">
              SAVE
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr />
      </form>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Subject Code</TableCell>
              <TableCell>Subject Name</TableCell>

              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Subject.map((row) => (
              <TableRow key={row.subject_name}>
                <TableCell component="th" scope="row">
                  {row.subject_code}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.subject_name}
                </TableCell>

                <TableCell component="th" scope="row">
                  <EditIcon color="primary" onClick={() => editSubject(row)} />

                  <DeleteIcon
                    color="secondary"
                    onClick={() => deleteSubject(row.subject_id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PatientRegistration;
