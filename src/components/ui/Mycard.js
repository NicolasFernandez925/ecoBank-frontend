import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },

  cardHome: {
    padding: "35px 0px",
    borderRadius: "40px",
    backgroundColor: "#666",
    opacity: ".9",
    boxShadow: "7px 10px 41px -2px black",
  },

  tipographyColor: {
    color: "white",
  },
}));

const Mycard = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardHome}>
      <CardContent>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          className={classes.tipographyColor}
        >
          {title}
        </Typography>

        {children}
      </CardContent>
    </Card>
  );
};

export default Mycard;
