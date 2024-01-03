import React, { Component } from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={TodoApp} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
};
