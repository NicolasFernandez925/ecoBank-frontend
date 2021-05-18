import React, { useEffect } from "react";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AuthRouter from "../router/AuthRoute";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ActivateAccount from "../pages/ActivateAccount";

import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { authenticate } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import Statistics from "../components/Main/Statistics";
import NavBar from "../components/Header/NavBar";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { autenticado, confirmed } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  return (
    <Router>
      <NavBar />
      <Switch>
        <PublicRoute
          exact
          path="/auth/authentication/confirmation/:token"
          component={ActivateAccount}
        />

        <PublicRoute
          exact
          path="/"
          component={Home}
          isAuthenticated={autenticado}
        />
        <PublicRoute
          path="/auth"
          component={AuthRouter}
          isAuthenticated={autenticado}
        />
        <PrivateRoute
          path="/dashboard"
          isAuthenticated={autenticado}
          confirmed={confirmed}
          component={Dashboard}
        />
        <PrivateRoute
          path="/statistics"
          isAuthenticated={autenticado}
          confirmed={confirmed}
          component={Statistics}
        />
        <Redirect to="/auth/signin" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
