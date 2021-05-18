import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { GoogleLogin } from "react-google-login";
import { Formik } from "formik";
import Error from "../ui/Error";
import { signIn, signInGoogle } from "../../actions/authAction";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: 10,
    width: "100%",
  },
  title: {
    margin: "0px 0px 35px 0px",
    fontWeight: 300,
  },
  forgotPassword: {
    marginTop: 30,
    color: "black",
    fontWeight: 400,
  },
  imgGoogle: {
    height: 25,
    marginRight: 10,
  },
  buttonGoogle: {
    marginTop: 10,
    padding: 11,
    border: "none",
    width: "100%",
    boxShadow: "0px 0px 9px -3px black",
    cursor: "pointer",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
  },

  button: {
    width: "100%",
    marginTop: 30,
    padding: 11,
  },
}));

const SignInForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.ui);

  const responseGoogle = async (response) => {
    dispatch(signInGoogle(response));
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "El email no puede estar vacio";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "El mail no es correcto";
        } else if (!values.password) {
          errors.password = "El password no puede esatr vacio";
        } else if (values.password.length <= 6) {
          errors.password = "La contraseña debe tener almenos 6 caracteres";
        }
        return errors;
      }}
      onSubmit={(values) => {
        dispatch(signIn(values));
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Typography className={classes.title} variant="h4">
            Inicia sesión
          </Typography>
          <TextField
            className={classes.input}
            onChange={handleChange}
            label="Email"
            name="email"
            value={values.email}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          {errors.email && (
            <Typography
              variant="subtitle2"
              display="block"
              gutterBottom
              color="secondary"
              align="center"
            >
              {errors.email}
            </Typography>
          )}
          <TextField
            className={classes.input}
            onChange={handleChange}
            type="password"
            label="Password"
            name="password"
            value={values.password}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }}
          />
          {errors.password && (
            <Typography
              variant="subtitle2"
              display="block"
              gutterBottom
              color="secondary"
              align="center"
            >
              {errors.password}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            className={classes.button}
          >
            {loading ? <CircularProgress /> : "Enviar"}
          </Button>

          <GoogleLogin
            clientId="22495429396-d8o8avldmq5034g6suvvovc7l4pel6om.apps.googleusercontent.com"
            buttonText="Login"
            render={(renderProps) => (
              <div className={classes.contenedorBotonGoogle}>
                <button
                  className={classes.buttonGoogle}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img
                    className={classes.imgGoogle}
                    alt="phone"
                    src="https://pics.freeicons.io/uploads/icons/png/2659939281579738432-512.png"
                  />
                  <Typography variant="body1">Inicia con Google</Typography>
                </button>
              </div>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          {error ? <Error> {error} </Error> : null}
          <Typography variant="body1" className={classes.forgotPassword}>
            <Link underline="none" href="/auth/forgotpassword" color="inherit">
              Olvidaste tu contraseña?
            </Link>
          </Typography>
        </form>
      )}
    </Formik>
  );
};

export default SignInForm;
