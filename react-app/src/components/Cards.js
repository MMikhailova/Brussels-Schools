import React from 'react'
import "../style/card.css";
export default function Cards() {
  return (
    <>
      <div className="card">
        <img src="" alt="" className="card-img"></img>
        <div className="card-grid">
          <h2 className="card-header">shool name</h2>
          <p className="card-language">lang</p>
          <p className="card-desc">desc</p>
          <p className="card-contact">contact</p>
          <p className="card-age">age</p>
          <p className="card-review">review</p>
          <p className="card-funding">funding</p>
        </div>
      </div>
    </>
  );
}
