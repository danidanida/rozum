import React from "react";
import { connect } from "react-redux";
import ScheduleTable from "./Schedule";
import PageNotFound from "../PageNotFound";

const Schedule = (props) => {
  console.log("Hire me!")
  const schedule = props.schedule;
  const currDoctor = props.doctor;

  if (!props.initialized) {
    return <h2>Loading...</h2>;
  }

  if (!currDoctor) {
    return <PageNotFound />;
  }

  return (
    <div>
      <ScheduleTable schedule={schedule} currDoctor={currDoctor} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const schedule = state.schedule;
  const currId = parseInt(ownProps.match.params.id);

  let scheduleForDoctor = schedule
    .filter((a) => a.employee_id === currId)
    // находим, сопровождено ли покидание врачом больницы с нарушением правил
    // (остается меньше 3 врачей )
    .map((doctor) => {
      var to = doctor.to;

      var count = schedule
        .filter((s) => s.employee_id !== currId)
        .filter((s) => to > s.from && to < s.to);

      let warning = false;
      if (count.length < 3) {
        warning = true;
      }

      return { ...doctor, warning: warning };
    });

  const currentDoctor = state.doctorsList.filter(
    (a) => a.id.toString() === currId.toString()
  )[0];

  return {
    schedule: scheduleForDoctor,
    doctor: currentDoctor,
    initialized: state.initialized,
  };
};

export default connect(mapStateToProps)(Schedule);
