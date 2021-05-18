import React from "react";
import { Link } from "react-router-dom";
import { openModal } from "../../actions/uiAction";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AssessmentIcon from "@material-ui/icons/Assessment";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { useDispatch, useSelector } from "react-redux";
import {
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { logout } from "../../actions/authAction";
import { openMenu } from "../../actions/uiAction";

const MyListItems = () => {
  const dispatch = useDispatch();

  const { usuario } = useSelector((state) => state.auth);

  const cerrarSesion = () => {
    dispatch(logout());
    dispatch(openMenu(false));
  };

  const agregarOperacion = () => {
    dispatch(openMenu(false));
    dispatch(openModal(true));
  };

  return (
    <>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText
            primary={usuario?.nombre + " " + usuario?.apellido || null}
          />
        </ListItem>
        <Divider />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/dashboard"}
          onClick={() => dispatch(openMenu(false))}
        >
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"props.link"}
          onClick={agregarOperacion}
        >
          <ListItem button>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Add operation" />
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/statistics"}
          onClick={() => dispatch(openMenu(false))}
        >
          <ListItem button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={cerrarSesion}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </>
  );
};

export default MyListItems;
