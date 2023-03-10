import Map from "./components/Map";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import "./App.css";

import { removeDuplicates } from "./api/viewModels/getSchoolsVm";


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
    let url = `https://www.odwb.be/api/records/1.0/search/?dataset=signaletique-fase&q=&rows=3000&refine.bassin=Bruxelles`;
    searchQuery.type === "Supérieur" && (url += `&refine.niveau=Supérieur`);
    searchQuery.type === "Maternel"  &&
      (url += `&refine.niveau=Fondamental&refine.type_d_enseignement=Maternel+ordinaire`);
   searchQuery.type === "Primaire" &&
     (url += `&refine.niveau=Fondamental&refine.type_d_enseignement=Primaire+ordinaire`);
  searchQuery.posteCode &&
    (url += `&refine.code_postal_de_l_etablissement=${searchQuery.posteCode}`);

    console.log(url);
// getFrenchSchools().then((v)=>console.log(v))
    try {
      const response = await fetch(url);
      const data = await response.json();
      const result =data.records
      
  const unique=removeDuplicates(result);
      setSearchResults(unique);
    } catch (error) {
      console.log(error);
    }
  };
  fetchSearchResults();
  return () => {};
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
          <Footer></Footer>
        </div>
        <div className="right-panel">
          <Map searchResults={searchResults} />
        </div>
      </div>
    </>
  );
}

export default App;

