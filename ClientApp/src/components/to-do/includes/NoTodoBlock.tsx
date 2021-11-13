import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { TodoContext } from "../TodoContext";

interface INoTodoBlockProps {
  children: string;
}

export default function NoTodoBlock(props: INoTodoBlockProps): any {
  const { isTodoCategoryEmpty, todoSection } = useContext<any>(TodoContext);
  const useStyles = makeStyles((theme) => ({
    noTodo: {
      marginTop: "25px",
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  return (
    !isTodoCategoryEmpty(todoSection) && (
      <Typography variant="h5" className={classes.noTodo}>
        {props.children}
      </Typography>
    )
  );
}
