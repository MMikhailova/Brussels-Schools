import Map from "./components/Map";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState({});
  console.log(searchQuery)
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="flex-container">
        <div className="left-panel">
          <Intro />
          <Filters setSearchQuery={setSearchQuery}/>
          <Cards />
        </div>
        <div className="right-panel">
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;

