import React from 'react'
import "../style/card.css";

export default function Cards({ searchResults }) {
  return (
    <div className="cards">
      {searchResults.length > 0 ? (
        searchResults.map((school) => (
          <div className="card" key={school.attributes.name}>
            <img
              src={
                school.attributes.image.data
                  ? `./.${school.attributes.image.data.attributes.url}`
                  : "././photos/school.png"
              }
              alt=""
              className="card-img"
            ></img>
            <div className="card-table">
              <h3>{school.attributes.name}</h3>
              <p>{school.attributes.language} speaking school</p>
              <p>
                <i className="fa-solid fa-location-dot"></i>
                {school.attributes.posteCode}, {school.attributes.commune},
                {school.attributes.street}
              </p>
              <p>
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
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="header">Sorry, there is nothing for your request.</p>
      )}
    </div>
  );
}
