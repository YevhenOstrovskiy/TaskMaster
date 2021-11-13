import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { TodoContextProvider } from "./components/to-do/TodoContext";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import ToDo from "./components/to-do/ToDo";
import Targets from "./components/targets/Targets";
import Notes from "./components/notes/Notes";
import Calendar from "./components/calendar/Calendar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Nav />
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo/:todoSection">
              <TodoContextProvider>
                <ToDo />
              </TodoContextProvider>
            </Route>
            <Route path="/targets">
              <Targets />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
