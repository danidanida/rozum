import React from "react";
import { useDispatch } from 'react-redux'
import { getEmployees, getWorklog } from "./api";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DoctorsList from "./components/DoctorsListPage/DoctorsList";
import Schedule from "./components/SchedulePage/Schedule";
import {initializeDoctorsList, initializeSchedule} from './actions'

const App = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const fetchData = async () => {
      const employees = await getEmployees()
      dispatch(initializeDoctorsList(employees))
      
      const schedule = await getWorklog()
      dispatch(initializeSchedule(schedule))
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/doctors">
            <DoctorsList />
          </Route>{" "}
          <Route path="/schedule">
            <Schedule />
          </Route>{" "}
        </Switch>{" "}
      </div>{" "}
    </Router>
  );
};
/*class App extends Component {
  state = {
    loading: true,
    employees: [],
    worklog: []
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return "Loading...";
    }

    return <div></div>;
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }
} */

export default App;
