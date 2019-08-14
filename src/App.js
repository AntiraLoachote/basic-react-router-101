import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Settings } from "./components/Settings";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact render={() => <h1>This is main page</h1>} />
      <Route path="/settings/" render={Settings} />
      <Route path="/contact/" render={() => <h1>Contact</h1>} />
    </div>
  );
}

export default App;
