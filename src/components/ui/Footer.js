import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Typography from "@material-ui/core/Typography";

const footer = {
  backgroundColor: "#6c5ee6",
  width: "100%",
  textAlign: "center",
  height: "100px",
  display: "flex",
  marginTop: "60px",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
};

const Footer = () => {
  return (
    <div style={footer}>
      <Typography
        style={{ display: "flex", alignItems: "center" }}
        variant="body2"
        color="initial"
      >
        <CopyrightIcon style={{ marginRight: "5px" }} /> Nicolas Fernandez.
      </Typography>
    </div>
  );
};

export default Footer;
