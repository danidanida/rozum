import React from "react";
import { connect } from "react-redux";
import DoctorListTable from "./DoctorsListTable";
import { compare, reformatDate } from "./utils";
const DoctorsList = (props) => {
  const sortedDoctorsArray = props.doctorsList.sort((a, b) => compare(a, b));

  for (let i = 0; i < sortedDoctorsArray.length; i++) {
    sortedDoctorsArray[i].birthDate = reformatDate(
      sortedDoctorsArray[i].birthDate
    );
  }

  const table = <DoctorListTable doctors={sortedDoctorsArray} />;

  return <div> {table} </div>;
};

const mapStateToProps = (state) => {
  return { doctorsList: state.doctorsList };
};

export default connect(mapStateToProps)(DoctorsList);
