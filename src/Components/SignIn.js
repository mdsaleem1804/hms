import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { InputHook } from "../Components/Common/InputHook";
import Alert from "@material-ui/lab/Alert";
import LinearProgress from "@material-ui/core/LinearProgress";
import Helper from "../Components/Common/Helper";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const [loginStatusErrorMessage, setLoginStatusErrorMessage] = useState("");
  const [Loading, setLoading] = useState(false);

  const { value: email, bind: bindEmail, reset: resetEmail } = InputHook("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = InputHook("");
  function loginSuccess(response) {
    localStorage.setItem("usertoken", response.data);
    history.push("/PatientRegistration");
    window.location.reload(false);
  }
  function loginFail() {
    setLoginStatusErrorMessage("Please check with your credentials");
    setLoading(false);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    setLoginStatusErrorMessage("");

    fetch(Helper.getUrl() + "auth", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        response.message === "success" ? loginSuccess(response) : loginFail();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setLoginStatusErrorMessage("Server Error.");
        setLoading(false);
      });
    resetEmail();
    resetPassword();
  };
  let alert, button;
  if (loginStatusErrorMessage === "") {
  } else {
    alert = (
      <Alert variant="filled" severity="error">
        {loginStatusErrorMessage}
      </Alert>
    );
  }
  if (Loading) {
    button = (
      <div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled
          className={classes.submit}
        >
          Sign In
        </Button>

        <LinearProgress color="secondary" />
      </div>
    );
  } else {
    button = (
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
    );
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {alert}
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...bindEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...bindPassword}
          />

          {button}
        </form>
      </div>
    </Container>
  );
}
