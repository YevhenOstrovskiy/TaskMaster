import React, { useContext, useEffect } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { TodoContext } from "../TodoContext";

interface ITodo {
  date: string;
  index: number;
  status: string;
  value: string;
}

export default function TodoList() {
  const { todos, completeTodo, todoSection, deleteTodo } =
    useContext<any>(TodoContext);
  const useStyles = makeStyles((theme) => ({
    todoList: {
      width: "100%",
      "& .MuiListItem-root": {
        paddingLeft: "4px",
        paddingRight: "0px",
      },
    },
    todoItem: {
      borderBottom: "1px solid black",
    },
    button: {
      minWidth: "115px",
    },
  }));
  const classes = useStyles();

  const InboxItems = () =>
    todos.map((todo: ITodo) => {
      if (todo.status === todoSection) {
        return (
          <ListItem className={classes.todoItem} key={todo.index}>
            <Checkbox
              name="checkedB"
              color="primary"
              onClick={() => setTimeout(() => completeTodo(todo.index), 200)}
            />
            <ListItemText primary={todo.value} />
          </ListItem>
        );
      }
    });

  const DoneItems = () =>
    todos.map((todo: ITodo) => {
      if (todo.status === todoSection) {
        return (
          <ListItem className={classes.todoItem} key={todo.index}>
            <ListItemText primary={todo.value} />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => deleteTodo(todo.index)}
              startIcon={<DeleteForeverIcon />}
            >
              Delete
            </Button>
          </ListItem>
        );
      }
    });

  return (
    <List className={classes.todoList}>
      {todoSection === "inbox" ? <InboxItems /> : <DoneItems />}
    </List>
  );
}
