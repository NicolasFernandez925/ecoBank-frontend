import React from "react";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ResetPassword from "../pages/ResetPassword";

import ForgotPassword from "../pages/ForgotPassword";
import { Switch, Route, Redirect } from "react-router-dom";

const AuthRoute = () => {
  return (
    <div>
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
