import Map from "./components/Map";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [searchQuery, setSearchQuery] = useState({
    language: null,
    funding: null,
    posteCode:null,
    type: null,
  });
 const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const fetchSearchResults = async () => {
      let url = `http://localhost:1337/api/schools?`
      for (const [key, value] of Object.entries(searchQuery)) {
        value&&(url += `&filters[${key}][$eq]=${value}`)
        
      }
console.log(url)

      try {
        const response = await fetch(url
        )
        const data = await response.json();
        console.log(data.data)
        setSearchResults(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchResults();
    return () => {
      // this gets called when the component unmounts
    };
  }, [searchQuery]);
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="flex-container">
        <div className="left-panel">
          <Intro />
          <Filters setSearchQuery={setSearchQuery} />
          <Cards searchResults={searchResults} />
        </div>
        <div className="right-panel">
          <Map searchResults={searchResults} />
        </div>
      </div>
    </>
  );
}

export default App;

