import React from "react";
import { Grid, CardContent, Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import ForgotPasswordForm from "../components/form/ForgotPasswordForm";

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
    padding: 20,
  },

  containerSignIn: {
    padding: 13,
    borderRadius: 8,
  },
}));

const ForgotPassword = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.containerSignIn} item xs={12} md={4}>
        <Card className={classes.cardContent}>
          <CardContent>
            <ForgotPasswordForm />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
