import React from "react";
import { connect } from "react-redux";
import ScheduleTable from "./ScheduleTable";

const Schedule = (props) => {
  const schedule = props.schedule;
  const currDoctor = props.doctor;
  const warning = props.warning;

  return (
    <div>
      <ScheduleTable
        schedule={schedule}
        currDoctor={currDoctor}
        warning={warning}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const schedule = state.schedule;
  const currId = ownProps.match.params.id;
  let warning = [];

  let scheduleForDoctor = [];
  if (schedule) {
    scheduleForDoctor = schedule.filter(
      (a) => a.employee_id.toString() === currId.toString()
    );
  }

  for (let i = 0; i < scheduleForDoctor.length; i++) {
    var to = scheduleForDoctor[i].to;

    var count = schedule
      .filter((s) => s.employee_id !== currId)
      .filter((s) => to > s.from && to < s.to);

    if (count.length < 3) {
      warning.push(true);
    } else warning.push(false);
  }
  const currentDoctor = state.doctorsList.filter(
    (a) => a.id.toString() === currId.toString()
  )[0];

  return {
    schedule: scheduleForDoctor,
    doctor: currentDoctor,
    warning: warning,
  };
};

export default connect(mapStateToProps)(Schedule);
