import Map from "./components/Map";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Filters from "./components/Filters";
import Cards from "./components/Cards";

import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="flex-container">
        <div className="left-panel">
          <Intro />
          <Filters />
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
