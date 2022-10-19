import React from 'react'
import { schools } from '../schools';
import "../style/card.css";

export default function Cards() {
  return (
    <div className="cards">
      {schools.map((school) => (
        <div className="card" key={school.name}>
          <img src={school.url} alt="" className="card-img"></img>
          <div className="card-grid">
            <h2 className="card-header">{school.name}</h2>
            <p className="card-language bordered">{school.lang}</p>
            <p className="card-desc">{school.desc}</p>
            <p className="card-contact bordered">{school.contact}</p>
            <p className="card-age bordered">{school.age}</p>
            <p className="card-review bordered">{school.review}</p>
            <p className="card-funding bordered">{school.funding}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
