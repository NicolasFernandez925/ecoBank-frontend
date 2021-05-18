import React from "react";
import { Bar } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Mycard from "../ui/Mycard";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  green: {
    color: "#fff",
    backgroundColor: "#29cc29",
  },
  red: {
    color: "#fff",
    backgroundColor: "red",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
  imgFondo: {
    backgroundImage: "url(../../fondo-home.jpg)",
    backgroundSize: "cover",
  },
  buttonCard: {
    padding: "15px",
  },
}));

const Statistics = () => {
  const classes = useStyles();
  const { balance } = useSelector((state) => state.operation);

  const history = useHistory();

  const {
    balanceTotalPesos,
    egresos,
    ingresos,
    totalEgresosPesos,
    totalIngresosPesos,
  } = balance;
  const data = {
    labels: ["$ Balance total", "$ Total egresos", "$ Total ingresos"],
    datasets: [
      {
        label: "Total balance",
        data: [balanceTotalPesos, totalEgresosPesos, totalIngresosPesos],
        backgroundColor: [
          "rgba(0, 255, 0, 0.3)",
          "rgba(255, 0, 0, 0.4)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1",
          "rgba(54, 162, 235, 1",
          "rgba(54, 162, 235, 1",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      {!balance?.msg ? (
        <div style={{ margin: "0px 15px", paddingTop: "10px" }}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={12}>
              <Typography
                variant="h3"
                color="initial"
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  padding: "50px 0px",
                }}
              >
                Gráfico de ingresos y Egresos
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              md={3}
              container
              direction="column"
              alignItems="center"
              style={{ textAlign: "center" }}
            >
              <h5> Ingresos</h5>
              <Avatar className={classes.green}>{ingresos || 0}</Avatar>
            </Grid>
            <Grid
              item
              xs={2}
              md={3}
              container
              direction="column"
              alignItems="center"
            >
              <h5> Egresos</h5>
              <Avatar className={classes.red}>{egresos || 0}</Avatar>
            </Grid>
            <Grid item xs={12} md={8} style={{ marginTop: 30 }}>
              <Bar data={data} />
            </Grid>
          </Grid>
        </div>
      ) : (
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "100vh" }}
          className={classes.imgFondo}
        >
          <Grid item xs={12} md={5}>
            <Container maxWidth="lg">
              <Mycard
                style={{
                  height: "250px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                title={balance.msg}
                messageButton={"volverAtras"}
              >
                <Box mt={5} className={classes.btnContainer}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => history.goBack()}
                    className={classes.buttonCard}
                  >
                    <NavigateBeforeIcon />
                    Volver atrás
                  </Button>
                </Box>
              </Mycard>
            </Container>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Statistics;
