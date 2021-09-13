import { useState } from "react";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavBar from "./components/navbar";
import Header from "./components/Header";
import RenderTable from "./components/RenderTable";
import History from "./components/History";

const App = () => {

  return (
    <>
      <div>
        <NavBar />
        <Header />
      </div>
      <div className="hero">
        <RenderTable onClick ={() => RenderTable()} />
        <History />
      </div>
    </>
  );
};

export default App;
