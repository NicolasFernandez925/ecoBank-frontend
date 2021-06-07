import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../actions/uiAction";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    padding: "35px 0px",
    borderRadius: "15px",
    backgroundColor: "#fff",
    boxShadow: "7px 10px 41px -2px black",
  },
}));

const MyDialog = ({ children }) => {
  const classes = useStyles();
  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <>
      <Dialog
        classes={{ paper: classes.root }}
        open={modalOpen}
        keepMounted
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => dispatch(openModal(false))}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyDialog;
