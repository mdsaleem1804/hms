import React from "react";
import logo from "./logo.svg";
import "./App.css";

import FormPage from "./Components/FormRegister";
import FormLogin from "./Components/FormLogin";

import NavbarPage from "./Components/Common/NavbarPage";
import PatientRegistration from "./Components/Patient/PatientRegistration";
import FooterPage from "./Components/Common/FooterPage";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
function App() {
  return (
    <div className="App">
      <header>
        <NavbarPage />
        <PatientRegistration />
        <FooterPage />
      </header>
    </div>
  );
}

export default App;
