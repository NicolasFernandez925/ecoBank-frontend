import React from "react";
import Grid from "@material-ui/core/Grid";
import Balance from "../components/Main/Balance";
import ListOperations from "../components/Main/ListOperations";
import Footer from "../components/ui/Footer";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Balance />
        <ListOperations />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
