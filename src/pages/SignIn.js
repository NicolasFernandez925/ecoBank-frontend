import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SignInForm from "../components/form/SignInForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "100vh",
  },
  cardContent: {
    padding: 10,
    borderRadius: "30px",
  },

  containerSignIn: {
    padding: 13,
    borderRadius: 8,
  },
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.containerSignIn} item xs={12} md={4}>
        <Card className={classes.cardContent}>
          <CardContent>
            <SignInForm />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default SignIn;
