import React from "react";
import "./App.css";

import NavbarPage from "./Components/Common/NavbarPage";
import FooterPage from "./Components/Common/FooterPage";
import { Header } from "./Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PatientRegistration from "./Components/Patient/PatientRegistration";
import PatientList from "./Components/Patient/PatientList";
function App() {
  return (
    <Router>
      <React.Fragment>
        <NavbarPage />
        <Switch>
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

/*
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Header";

const Login = () => <div>Login</div>;
const Home = () => <div>Home</div>;

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/login" component={() => <Login />} />
          <Route path="/home" component={() => <Home />} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
*/
