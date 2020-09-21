import React, { Component } from "react";
import "./App.css";
import home from "./pages/home";
import marker from "./pages/marker";
import hopper from "./pages/hopper";
import air_tank from "./pages/air_tank";
import paint from "./pages/paint";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={home} />
          <Route exact path="/marker" component={marker} />
          <Route exact path="/hopper" component={hopper} />
          <Route exact path="/air_tank" component={air_tank} />
          <Route exact path="/paint" component={paint} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
