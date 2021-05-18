import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(69, 74, 105)",
        width: "100%",
        textAlign: "center",
        height: "100px",
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography variant="body2" color="initial">
        <CopyrightIcon /> Nicolas Fernandez.
      </Typography>
    </div>
  );
};

export default Footer;
