import React from 'react'
import "../style/card.css";

export default function Cards({ searchResults }) {

  return (
    <div className="cards">
      {searchResults.length > 0 ? (
        searchResults.map((school) => (
          <div className="card" key={school.recordid}>
            <img
              src={"././photos/school.png"}
              alt=""
              className="card-img"
            ></img>
            <div className="card-table">
              <h3>{school.fields.nom_de_l_etablissement}</h3>
              {/* <p>{school.fields.language} speaking school</p> */}
              <p>
                <i className="fa-solid fa-location-dot"></i>
                {school.fields.code_postal_de_l_etablissement},
                {school.fields.adresse_de_l_etablissement}
              </p>
              {/* <p>
                <i className="fas fa-phone"></i>
                {school.attributes.telephone}
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>
                {school.attributes.email}
              </p>
              <p>
                <a href={school.attributes.siteWeb}>
                  {school.attributes.siteWeb}
                </a>
              </p> */}
            </div>
          </div>
        ))
      ) : (
        <p className="header">Sorry, there is nothing for your request.</p>
      )}
    </div>
  );
}
