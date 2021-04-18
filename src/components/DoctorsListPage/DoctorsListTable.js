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
  const doctors = props.doctors.slice(0, 6);
  const path = "/";

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ФИО</TableCell>
              <TableCell align="right">Дата рождения</TableCell>
              <TableCell align="right">Телефон</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((row, i) => (
              <TableRow key={i}>
                <TableCell align="right">
                  {" "}
                  <Link to={path + row.id}>
                    {`${row.lastName} ${row.firstName} ${row.middleName}`}{" "}
                  </Link>
                </TableCell>
                <TableCell align="right">{row.birthDate}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DoctorsListTable;
