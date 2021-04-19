import React from "react";
import { connect } from "react-redux";
import DoctorListTable from "./DoctorsList";
import { compare, reformatDate } from "./utils";

const DoctorsList = (props) => {
  if (!props.initialized) {
    return <h2>Loading...</h2>;
  }

  const table = <DoctorListTable doctors={props.doctorsList} />;

  return <div> {table} </div>;
};

const mapStateToProps = (state) => {
  let sortedDoctorsArray = [];

  sortedDoctorsArray = state.doctorsList.sort(compare).map((d) => {
    return { ...d, birthDate: reformatDate(d.birthDate) };
  });

  return { doctorsList: sortedDoctorsArray, initialized: state.initialized };
};

export default connect(mapStateToProps)(DoctorsList);
