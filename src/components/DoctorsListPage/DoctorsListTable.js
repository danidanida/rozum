import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const DoctorsListTable = (props) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Фамилия</TableCell>
              <TableCell align="right">Имя </TableCell>
              <TableCell align="right">Отчество</TableCell>
              <TableCell align="right">Дата рождения</TableCell>
              <TableCell align="right">Телефон</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.doctors.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.middleName}</TableCell>
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
