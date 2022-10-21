import React from 'react'
import { schools } from '../schools';
import "../style/card.css";

export default function Cards() {
  return (
    <div className="cards">
      {schools.map((school) => (
        <div className="card" key={school.name}>
          <img src={school.url} alt="" className="card-img"></img>
          <table className="card-table">
            <tr>
              <td className="header" rowSpan="2">
                {school.name}
              </td>
              <td>{school.lang}</td>
            </tr>
            <tr>
              <td>{school.age}</td>
            </tr>
            <tr>
              <td className="text" rowSpan="3">
                {school.desc}
              </td>
              <td>{school.funding}</td>
            </tr>
            <tr>
              <td>{school.contact}</td>
            </tr>
            <tr>
              <td className="review">{school.review}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
    
      

}
