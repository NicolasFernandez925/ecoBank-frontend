import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DragAndDrop from "../DragAndDrop";
import Card from "@material-ui/core/Card";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { editUser } from "../../actions/authAction";
import {
  Typography,
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";
import Error from "../ui/Error";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "6px 0px",
    width: "100%",
  },
  title: {
    margin: "10px 0px 35px 0px",
    fontWeight: 300,
    color: "#484848",
  },
  button: {
    width: "100%",
    marginTop: 30,
    padding: 11,
  },

  card: {
    padding: "30px 20px",
    background: "#f7f7f7",
    borderRadius: "25px",
  },
}));

const FormEditUser = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [img, setImg] = useState({});
  const { error } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.ui);

  const { usuario } = useSelector((state) => state.auth);

  return (
    <Formik
      initialValues={{
        name: usuario.nombre,
        email: usuario.email,
        password: usuario.password,
      }}
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
        let formData = new FormData();
        formData.append("image", img[0]);
        formData.append("email", values.email);
        formData.append("password", values.password);
        dispatch(editUser(formData));

        // aca iria el dispatch hacia una accion que envia la img al backend
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Card className={classes.card}>
            <Typography className={classes.title} variant="h3">
              Mi Perfil
            </Typography>

            <DragAndDrop setImg={setImg} usuario={usuario} />
            <TextField
              className={classes.input}
              onChange={handleChange}
              label="Nombre"
              name="name"
              value={values.name}
              variant="outlined"
              disabled
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.input}
              onChange={handleChange}
              label="Email"
              name="email"
              value={values.email}
              variant="outlined"
              disabled={usuario?.google}
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
              label="Contraseña"
              name="password"
              value={values.password}
              variant="outlined"
              disabled={usuario?.google}
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
              disabled={usuario?.google}
              className={classes.button}
            >
              {loading ? <CircularProgress /> : "Editar"}
            </Button>
          </Card>
          {error ? <Error> {error} </Error> : null}
        </form>
      )}
    </Formik>
  );
};

export default FormEditUser;
