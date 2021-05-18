import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { balance as balanceOperations } from "../../actions/operationAction";
const useStyles = makeStyles((theme) => ({
  backgroundMain: {
    background: "#534e7b",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "50px 0px",
    color: "white",
  },
  subItemMain: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  monto: {
    fontWeight: 300,
    fontSize: 80,
  },
}));

const Balance = () => {
  const dispatch = useDispatch();
  const { balance, operaciones } = useSelector((state) => state.operation);
  const { usuario } = useSelector((state) => state.auth);

  const { balanceTotalPesos } = balance;
  useEffect(() => {
    dispatch(balanceOperations());
  }, [operaciones, dispatch]);

  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.backgroundMain}>
        <Box mt={4}>
          <Typography
            variant="h2"
            color="initial"
            gutterBottom
            align={"center"}
            className={classes.monto}
          >
            CA ${balanceTotalPesos || "0"}
          </Typography>
        </Box>
        <Grid container className={classes.subItemMain}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" color="initial">
                Sucursal origen
              </Typography>
              <Typography variant="body1" color="initial">
                Quilmes
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" color="initial">
                CBU
              </Typography>
              <Typography variant="body1" color="initial">
                {usuario.cbu}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Balance;
