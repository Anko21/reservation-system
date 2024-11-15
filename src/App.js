import React from "react";
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import RoutesConfig from "./routes/RoutesConfig";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
      <main className="container">
        <NavBar/>
        <RoutesConfig />
    </main>
  )
}

export default App;
