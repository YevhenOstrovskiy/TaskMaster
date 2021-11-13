import React from "react";
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

export default function MainContainer(props) {
  const useStyles = makeStyles(() => ({
    wrapper: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  }));

  const classes = useStyles();
  return <Container className={classes.wrapper}>{props.children}</Container>;
}
