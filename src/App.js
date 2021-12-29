import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import Header from "./components/Header";
import RenderTable from "./components/RenderTable";

const App = () => {

  return (
    <>
      <div>
        <NavBar />
        <Header />
      </div>
      <div className="hero">
        <RenderTable />
        
      </div>
    </>
  );
};

export default App;
