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

  return (
    <div>
      <h2>{`${currDoctor.lastName} ${currDoctor.firstName} ${currDoctor.middleName} `}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Начало смены</TableCell>
              <TableCell align="center">Конец смены</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.schedule.map((s, i) => (
              <TableRow key={i}>
                <TableCell align="center">{s.from}</TableCell>
                <TableCell
                  style={
                    s.warning === true ? { color: "red" } : { color: "black" }
                  }
                  align="center"
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
