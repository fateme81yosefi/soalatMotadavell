import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import "./App.css";
import { FilterProvider } from "./shared/ContextFilter";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Filterd from "./components/Filterd";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <FilterProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/filter">
              <Filterd />
            </Route>
            <Home /></Switch>
        </FilterProvider>
      </BrowserRouter>
    );
  }
}
