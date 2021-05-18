import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import { openMenu } from "../../actions/uiAction";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 23,
  },

  tittleAuth: {
    fontSize: 16,
  },
  linkTittle: {
    flexGrow: 1,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const Header = () => {
  const classes = useStyles();
  const { autenticado, usuario } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#454a69" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {autenticado && (
              <MenuIcon onClick={() => dispatch(openMenu(true))} />
            )}
          </Typography>
          {!autenticado ? (
            <>
              <Button
                href="/auth/signin"
                className={classes.tittleAuth}
                color="inherit"
              >
                SignIn
              </Button>
              <Button
                href="/auth/signup"
                className={classes.tittleAuth}
                color="inherit"
              >
                SignUp
              </Button>
            </>
          ) : (
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar src={usuario.imagen}>
                {usuario?.imagen ? usuario.imagen : usuario.nombre.substr(0, 2)}
              </Avatar>
            </StyledBadge>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
