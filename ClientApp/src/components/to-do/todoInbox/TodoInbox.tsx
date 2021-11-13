import React, { useContext } from "react";

import { Formik, Form, Field } from "formik";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";
import AddIcon from "@material-ui/icons/Add";
import TodoList from "../includes/TodoList";
import NoTodoBlock from "../includes/NoTodoBlock";
import { TodoContext } from "../TodoContext";

export default function TodoInbox() {
  // @ts-ignore
  const { addTodo, inputRef } = useContext<any>(TodoContext);

  const useStyles = makeStyles((theme) => ({
    form: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      alignItems: "flex-end",
      width: "100%",
      "& .MuiInputBase-input": {
        paddingLeft: "15px",
      },
    },
    field: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        marginRight: "0px",
        marginBottom: "25px",
      },
      marginRight: "50px",
    },
    button: {
      height: "32px",
    },
    todoList: {
      width: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Typography variant="h4">Inbox todos</Typography>
      <Formik
        initialValues={{
          todoName: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.todoName) {
            addTodo(values);
            values.todoName = "";
            setSubmitting(false);
          }
          setSubmitting(false);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.form}>
            <Field
              className={classes.field}
              component={TextField}
              type="todoName"
              label="What todo?"
              name="todoName"
              inputRef={inputRef}
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Form>
        )}
      </Formik>
      <NoTodoBlock>There is no active todos...</NoTodoBlock>
      <TodoList />
    </>
  );
}
