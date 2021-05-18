import React from "react";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ResetPassword from "../pages/ResetPassword";
import { makeStyles } from "@material-ui/core/styles";
import ForgotPassword from "../pages/ForgotPassword";
import { Switch, Route, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  imgFondo: {
    backgroundImage: "url(../../fondo-home.jpg)",
    backgroundSize: "cover",
  },
}));

const AuthRoute = () => {
  const classes = useStyles();
  return (
    <div className={classes.imgFondo}>
      <Switch>
        <Route exact path="/auth/signin" component={SignIn} />
        <Route path="/auth/signup" component={SignUp} />
        <Route exact path="/auth/forgotpassword" component={ForgotPassword} />
        <Route
          exact
          path="/auth/resetPassword/:resetToken"
          component={ResetPassword}
        />
        <Redirect to="/auth/signin" />
      </Switch>
    </div>
  );
};

export default AuthRoute;
