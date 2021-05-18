import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Mycard from "../components/ui/Mycard";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

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
  imgFondo: {
    backgroundImage: "url(../../fondo-home.jpg)",
    backgroundSize: "cover",
  },
  buttonCard: {
    padding: "15px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.imgFondo}>
      <Container>
        <Grid
          className={classes.root}
          container
          direction="row"
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={10} md={6}>
            <Mycard title="Controla tus ingresos y egresos en EcoBank !">
              <Box mt={5} className={classes.btnContainer}>
                <Button
                  variant="contained"
                  color="secondary"
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
    </div>
  );
};

export default Home;
