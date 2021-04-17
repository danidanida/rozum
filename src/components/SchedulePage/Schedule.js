import React from "react";
import { connect } from "react-redux";

const Schedule = (props) => {
    console.log(props)
    return (
        <div>Schedule</div>
    )
}

const mapStateToProps = (state) => {
    return state.schedule
  };
  
  export default connect(mapStateToProps)(Schedule);
