import React from "react";
import Grid from "@material-ui/core/Grid";
import FormEditUser from "../form/FormEditUser";

import Container from "@material-ui/core/Container";
import GoBack from "../ui/GoBack";

const Account = () => {
  return (
    <>
      <Container maxWidth="lg">
        <GoBack />
        <Grid
          container
          justify="center"
          align="center"
          spacing={0}
          style={{ marginTop: "60px" }}
        >
          <Grid item xs={12} md={6}>
            <FormEditUser />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Account;
