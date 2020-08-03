import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Admin from './router/Admin';
export default function BasicExample() {
  return (
    <Router>
      <Admin/>
    </Router>
  );
}
