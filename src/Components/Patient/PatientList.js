import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Helper from "../Common/Helper";
import { MDBBtn } from "mdbreact";
const DatatablePage = () => {
  const [Subject, setSubject] = useState([]);
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
    console.log(id);
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
      .then((json) => console.log(json));
  }

  return (
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
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => deleteSubject(row.subject_id)}
                  startIcon={<DeleteIcon />}
                >
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DatatablePage;
