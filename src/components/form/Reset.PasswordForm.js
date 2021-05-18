import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../actions/authAction";

import Error from "../ui/Error";
import {
  CircularProgress,
  InputAdornment,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory, useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: 10,
    width: "100%",
  },

  title: {
    margin: "0px 0px 35px 0px",
    fontWeight: 300,
  },

  alert: {
    textAlign: "center",
    margin: "50px 0px",
  },

  button: {
    width: "100%",
    marginTop: 30,
    padding: 11,
  },
}));

const ResetPasswordForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.ui);

  const classes = useStyles();
  const { resetToken } = useParams();

  return (
    <>
      {error === null ? alert : null}
      <Formik
        initialValues={{ password: "", repassword: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.password) {
            errors.password = "El campo password no puede estar vacio";
          } else if (!values.password) {
            errors.repassword = "El campo contraseña no puede esatar vacio";
          } else if (!values.password) {
            errors.password =
              "El campo repetir contraseña no puede esatar vacio";
          } else if (values.password.length <= 6) {
            errors.password = "Debe tener almenos 6 caracteres";
          } else if (values.password !== values.repassword) {
            errors.repassword = "Las contraseñas deben ser iguales";
          }
          return errors;
        }}
        onSubmit={async (values) => {
          const { password } = values;
          dispatch(resetPassword(password, resetToken));

          setTimeout(() => {
            history.push("/auth/signin");
          }, 3000);
        }}
      >
        {({ errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Typography className={classes.title} variant="h4">
              Cambia la contraseña
            </Typography>
            <TextField
              className={classes.input}
              onChange={handleChange}
              type="password"
              label="Password"
              name="password"
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

            <TextField
              className={classes.input}
              onChange={handleChange}
              type="password"
              label="Repassword"
              name="repassword"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
              }}
            />
            {errors.repassword && (
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                color="secondary"
                align="center"
              >
                {errors.repassword}
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
            {error ? <Error> {error} </Error> : null}
          </form>
        )}
      </Formik>
    </>
  );
};

export default ResetPasswordForm;
