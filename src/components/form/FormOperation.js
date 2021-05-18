import React from "react";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CommentIcon from "@material-ui/icons/Comment";

import { useDispatch } from "react-redux";
import { createOperation } from "../../actions/operationAction";

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
    padding: "0px 0px 20px 0px",
  },
  cardContent: {
    padding: 38,
  },
  input: {
    marginTop: 10,
    width: "100%",
  },
  formControl: {
    width: "100%",
    marginTop: 10,
  },
}));
const FormOperation = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={{
          monto: "",
          tipoOperacion: "",
          motivo: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.monto) {
            errors.monto = "El monto no puede estar vacio";
          } else if (!values.tipoOperacion) {
            errors.tipoOperacion = "El tipoOperacion no puede estar vacio";
          } else if (!values.motivo) {
            errors.motivo = "El motivo no puede ser vacio";
          }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          dispatch(createOperation(values));
          resetForm({});
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Typography className={classes.title} variant="h4">
              Agregar operación
            </Typography>

            <TextField
              className={classes.input}
              value={values.monto}
              onChange={handleChange}
              label="Monto"
              name="monto"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
            {errors.monto && (
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                color="secondary"
                align="center"
              >
                {errors.monto}
              </Typography>
            )}

            <TextField
              className={classes.input}
              value={values.motivo}
              onChange={handleChange}
              label="Motivo"
              name="motivo"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CommentIcon />
                  </InputAdornment>
                ),
              }}
            />
            {errors.motivo && (
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                color="secondary"
                align="center"
              >
                {errors.motivo}
              </Typography>
            )}

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="tipo-operacion">Tipo operación</InputLabel>
              <Select
                labelId="tipo-operacion"
                id="tipo-operacion"
                value={values.tipoOperacion}
                onChange={handleChange}
                name="tipoOperacion"
                label="Tipo operación"
              >
                <MenuItem value={1}>Ingreso</MenuItem>
                <MenuItem value={2}>Egreso</MenuItem>
              </Select>
            </FormControl>
            {errors.tipoOperacion && (
              <Typography
                variant="subtitle2"
                display="block"
                gutterBottom
                color="secondary"
                align="center"
              >
                {errors.tipoOperacion}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Enviar
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormOperation;
