import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";
import "./index.css";

const App = () => {
  const [selected, setSelected] = useState("Home");
  /*return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <Details />
      </div>
    </div>
  );*/
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Sidebar onMenuSelect={setSelected} />
        <Details selectedMenu={selected} />
      </div>
    </div>
  );
};

export default App;
