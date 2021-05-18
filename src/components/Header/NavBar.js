import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../actions/uiAction";
import MyListItems from "../../components/Header/MyListItems";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";

const drawerWidth = 210;
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    padding: 20,
  },
}));
const NavBar = () => {
  const classes = useStyles();
  const { openNav } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Drawer
        open={openNav}
        onClose={() => dispatch(openMenu(false))}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <MyListItems />
      </Drawer>
    </>
  );
};

export default NavBar;
