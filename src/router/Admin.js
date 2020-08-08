import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../AppHome';
import Administrator from '../admin/Administrator';
import Register from '../admin/container/register/Register';
import Login from '../admin/container/login/Login';
export default function BasicExample() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/admin/" component = {Administrator} />
      <Route exact path="/register/" component = {Register} />
      <Route exact path="/login/" component = {Login} />
    </Switch>
  );
}
