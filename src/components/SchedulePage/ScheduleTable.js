import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ScheduleTable = (props) => {
  const currDoctor = props.currDoctor;
  const warning = props.warning;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ФИО врача</TableCell>
              <TableCell align="center">Начало смены</TableCell>
              <TableCell align="right">Конец смены</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {currDoctor &&
                  `${currDoctor.lastName} ${currDoctor.firstName} ${currDoctor.middleName} `}
              </TableCell>
            </TableRow>
            {props.schedule &&
              props.schedule.map((s, i) => (
                <TableRow key={i}>
                  <TableCell align="right"></TableCell>
                  <TableCell align="center">{s.from}</TableCell>
                  <TableCell
                    style={
                      warning[i] === true
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    align="right"
                  >
                    {s.to}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScheduleTable;
