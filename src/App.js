import React from "react";
import "./App.css";

import NavbarPage from "./Components/Common/NavbarPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PatientRegistration from "./Components/Patient/PatientRegistration";
import PatientList from "./Components/Patient/PatientList";
import SignIn from "./Components/SignIn";
function App() {
  return (
    <Router>
      <React.Fragment>
        <NavbarPage />
        <Switch>
          <Route path="/SignIn" component={() => <SignIn />} />
          <Route
            path="/PatientRegistration"
            component={() => <PatientRegistration />}
          />
          <Route path="/PatientList" component={() => <PatientList />} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
