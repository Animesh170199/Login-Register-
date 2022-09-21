import React, { useEffect } from "react";
import "./App.css";
import Register from "./Components/Register";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="outer">
      <div className="inner">
        <Register />
      </div>
    </div>
  );
}

export default App;
