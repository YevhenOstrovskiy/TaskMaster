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
  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  function postTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);

    postData("https://localhost:5001/evgeniy", todos).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
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
