import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { MDBBtn } from "mdbreact";
const DatatablePage = () => {
  const [Subject, setSubject] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`http://localhost:1000/subject`);
        const json = await response.json();
        setSubject(json.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  //console.log(data1);
  const data = {
    columns: [
      {
        label: "Subject Code",
        field: "subject_code",
        sort: "asc",
        width: 150,
      },
      {
        label: "Subject Name",
        field: "subject_name",
        sort: "asc",
        width: 150,
      },
    ],
    rows: Subject,
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Subject Name</TableCell>
            <TableCell>Subject Code</TableCell>
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
                <MDBBtn color="success" size="sm">
                  Edit
                </MDBBtn>
              </TableCell>
              <TableCell component="th" scope="row">
                <MDBBtn color="danger" size="sm">
                  Delete
                </MDBBtn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DatatablePage;
