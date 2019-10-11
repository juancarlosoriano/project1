import React from "react";
import "../App.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () => (
  <div id="app">
    <Navbar />
    <div className="window">
      <Sidebar />
      <Main />
    </div>
  </div>
);

export default App;
