import React from "react";
import { Typography } from "@material-ui/core";
import TodoList from "../includes/TodoList";
import NoTodoBlock from "../includes/NoTodoBlock";

export default function TodoDone() {
  return (
    <>
      <Typography variant="h4">Done todos</Typography>
      <NoTodoBlock>There is no completed todos...</NoTodoBlock>
      <TodoList />
    </>
  );
}
