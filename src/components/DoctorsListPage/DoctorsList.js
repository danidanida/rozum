import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const DoctorsListTable = (props) => {
  const doctors = props.doctors;
  const path = "/doctors/";

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ФИО</TableCell>
              <TableCell align="center">Дата рождения</TableCell>
              <TableCell align="center">Телефон</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((row, i) => (
              <TableRow key={i}>
                <TableCell align="center">
                  <Link to={path + row.id}>
                    {`${row.lastName} ${row.firstName} ${row.middleName}`}
                  </Link>
                </TableCell>
                <TableCell align="center">{row.birthDate}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DoctorsListTable;
