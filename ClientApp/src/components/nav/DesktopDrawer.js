import React from "react";
import { Toolbar, Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContentDrawer from "./ContentDrawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

export default function DesktopDrawer() {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <ContentDrawer />
      </div>
    </Drawer>
  );
}
