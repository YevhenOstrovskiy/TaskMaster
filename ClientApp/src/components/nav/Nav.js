import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import MobileDrawer from "./MobileDrawer";
import NavMenu from "./NavMenu";
import { AppContext } from "../../AppContext";
import DesktopDrawer from "./DesktopDrawer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolBar: {
    justifyContent: "space-between",
  },
}));

export default function Nav() {
  const { toggleNav, viewNav } = useContext(AppContext);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div>
            {isMobile ? (
              <MobileDrawer />
            ) : (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleNav()}
              >
                <MenuIcon />
              </IconButton>
            )}
          </div>
          <NavMenu />
          <IconButton edge="end" color="inherit" aria-label="settings">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {!isMobile && viewNav && <DesktopDrawer />}
    </>
  );
}
