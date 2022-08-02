import React from "react";
import Header from "./components/Header";
import UsersContainer from "./components/containers/UsersContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UsersContainer />
    </div>
  );
}

export default App;
