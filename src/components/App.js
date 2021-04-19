import React from "react";
import { useDispatch } from "react-redux";
import { getEmployees, getWorklog } from "../API/api";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import DoctorsList from "./DoctorsListPage/DoctorsListContainer";
import Schedule from "./SchedulePage/ScheduleContainer";
import PageNotFound from "./PageNotFound";
import { initializeDoctorsList, initializeSchedule } from "../actions";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    getEmployees().then((employees) => {
      dispatch(initializeDoctorsList(employees));
    });

    getWorklog().then((schedule) => {
      dispatch(initializeSchedule(schedule));
    });
  }, []);

  return (
    <Router>
      <div>
        <h1>Больничное отделение</h1>
        <Switch>
          <Route exact path="/">
            <Redirect to="/doctors" />
          </Route>
          <Route exact path="/doctors" component={DoctorsList} />
          <Route exact path="/doctors/:id" component={Schedule} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
