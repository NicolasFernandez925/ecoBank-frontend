import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../actions/authAction";
import Error from "../ui/Error";
import {
  CircularProgress,
  InputAdornment,
  Typography,
  TextField,
  Button,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import MyDialog from "../MyDialog";
import { openModal } from "../../actions/uiAction";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: 10,
    width: "100%",
  },

  title: {
    margin: "0px 0px 35px 0px",
    fontWeight: 300,
  },

  button: {
    width: "100%",
    marginTop: 30,
    padding: 11,
  },
  tittleDialog: {
    fontSize: "37px",
    color: "#884683",
    textAlign: "center",
    marginBottom: 3,
  },
  subTittleDialog: {
    fontSize: "20px",
    textAlign: "center",
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.ui);

  return (
    <>
      {error === null && (
        <MyDialog>
          <Typography
            className={classes.tittleDialog}
            variant="h4"
            color="initial"
          >
            ¡Te hemos enviado un mail!
          </Typography>
          <DialogContent>
            <DialogContentText
              className={classes.subTittleDialog}
              id="alert-dialog-description"
            >
              Sigue las instrucciones del mail para activar tu cuenta, te
              esperamos!
            </DialogContentText>
          </DialogContent>
        </MyDialog>
      )}

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "El nombre no puede estar vacio";
          } else if (!values.surname) {
            errors.surname = "El apellido no puede esatr vacio";
          } else if (!values.email) {
            errors.email = "El email no puede estar vacio";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "El mail no es correcto";
          } else if (!values.password) {
            errors.password = "El password no puede estar vacio";
          } else if (values.password.length <= 6) {
            errors.password = "El password debe tener almenos 6 caracteres";
          }
          return errors;
        }}
        onSubmit={async (values) => {
          dispatch(registerUser(values));
          console.log(error);
          if (error === null) {
            dispatch(openModal(true));
          }
        }}
      >
        {({ errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Typography className={classes.title} variant="h4">
              Registrate
            </Typography>

            <TextField
              className={classes.input}
              onChange={handleChange}
              label="Name"
              name="name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            {errors.name && (
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                color="secondary"
                align="center"
              >
                {errors.name}
              </Typography>
            )}
            <TextField
              className={classes.input}
              onChange={handleChange}
              label="Surname"
              name="surname"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            {errors.surname && (
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                color="secondary"
                align="center"
              >
                {errors.surname}
              </Typography>
            )}

            <TextField
              className={classes.input}
              onChange={handleChange}
              label="Email"
              name="email"
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
            {error ? <Error> {error} </Error> : null}
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
