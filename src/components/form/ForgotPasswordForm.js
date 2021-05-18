import React from "react";
import { openModal } from "../../actions/uiAction";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../actions/authAction";
import Error from "../ui/Error";
import {
  Typography,
  CircularProgress,
  TextField,
  InputAdornment,
  Button,
  CardContent,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

import MyDialog from "../MyDialog";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    textAlign: "center",
  },
  button: {
    width: "100%",
    marginTop: 30,
    padding: 11,
  },
  title: {
    fontWeight: 300,
  },
  cardContent: {
    padding: 38,
  },
  input: {
    marginTop: 10,
    width: "100%",
  },
  tittleDialog: {
    color: "#884683",
    textAlign: "center",
    marginBottom: 3,
    fontWeight: 400,
  },
  subTittleDialog: {
    fontSize: "20px",
    textAlign: "center",
  },
}));

const ForgotPasswordForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.ui);

  return (
    <>
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
            Sigue las instrucciones del mail para cambiar tu contraseña
          </DialogContentText>
        </DialogContent>
      </MyDialog>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "El campo email no puede estar vacio";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "El mail no es correcto";
          }
          return errors;
        }}
        onSubmit={async (values) => {
          dispatch(forgotPassword(values));
          console.log(error);
          if (error === null) {
            dispatch(openModal(true));
          }
        }}
      >
        {({ errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Typography className={classes.title} variant="h4">
              Recuperá tu contraseña
            </Typography>
            <CardContent>
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
            </CardContent>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
