import React from "react";
import { CardContent, Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SignUpForm from "../components/form/SignUpForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
  },
  cardContent: {
    padding: 25,
  },
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.containerSignIn} item xs={12} md={4}>
        <Card className={classes.cardContent}>
          <CardContent>
            <SignUpForm />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUp;
