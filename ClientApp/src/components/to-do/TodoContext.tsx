import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

const TodoContext = React.createContext(null);

function TodoContextProvider(props: { children: JSX.Element }) {
  const [todos, setTodos] = useState<any>([]);
  const { todoSection }: { todoSection: string } = useParams();
  // const inputRef = useRef(null);

  const state = getDefaultState();

  function getDefaultState() {
    return {
      todos,
      addTodo,
      completeTodo,
      deleteTodo,
      isTodoCategoryEmpty,
      todoSection,
      getTodos,
      postTodos,
      // inputRef: inputRef,
    };
  }

  function getTodos() {
    // @ts-ignore
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }

  function postTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addTodo(values: { todoName: string }) {
    const newTodo = {
      index: state.todos.length,
      value: values.todoName,
      status: "inbox",
      date: new Date(),
    };
    // inputRef.current.focus();
    setTodos((todos: any) => [...todos, newTodo]);
  }

  function completeTodo(id: number) {
    const updatedTodos = todos.map((todo: any) => {
      if (todo.index === id) {
        return { ...todo, status: "done" };
      }
      return todo;
    });
    setTodos([...updatedTodos]);
  }

  function deleteTodo(id: number) {
    const updatedTodos = todos.map((todo: any) => {
      if (todo.index === id) {
        return { ...todo, status: "deleted" };
      }
      return todo;
    });
    setTodos([...updatedTodos]);
  }

  function isTodoCategoryEmpty(todoCategory: string) {
    return todos.find((todo: any) => {
      if (todo.status === todoCategory) {
        return true;
      }
    });
  }

  return (
    // @ts-ignore
    <TodoContext.Provider value={state}>{props.children}</TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };
