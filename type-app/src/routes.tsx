import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";
import LoginForm from "./components/Login"
import Dashboard from "./components/Dashboard"

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/dashboard" component={Dashboard} />
  </Hoc>
);

export default BaseRouter;
