import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Mycard from "../components/ui/Mycard";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },

  img: {
    width: "100%",
  },

  content: {
    marginTop: 60,
  },

  imgHome: {
    width: "100%",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },

  buttonCard: {
    padding: "15px",
    background: "#fff",
    borderRadius: "60px",
  },

  tittle: {
    fontWeight: "bold",
    color: "rgb(72 72 72)",
    "@media (max-width: 780px)": {
      fontSize: "3.5rem",
      margin: "80px 0px",
      textAlign: "center",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid
          className={classes.root}
          container
          direction="row"
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} md={7}>
            <Typography variant="h1" color="initial" className={classes.tittle}>
              Somos un banco en una app.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Mycard title="Controla tus ingresos y egresos en EcoBank !">
              <Box mt={5} className={classes.btnContainer}>
                <Button
                  variant="contained"
                  href={"/auth/signin"}
                  className={classes.buttonCard}
                >
                  Comienza ahora!
                  <NavigateNextIcon />
                </Button>
              </Box>
            </Mycard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
