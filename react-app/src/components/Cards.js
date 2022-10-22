import React from 'react'
import "../style/card.css";

export default function Cards({ searchResults }) {
  return < div className = "cards" >
  {searchResults.map((school) => (
      <div className="card" key={school.attributes.name}>
        <img src="" alt="" className="card-img"></img>
        <table className="card-table">
          <tbody>
            <tr>
              <td className="header" rowSpan="2">
                {school.attributes.name}
              </td>
              <td>{school.attributes.posteCode}</td>
            </tr>
            <tr>
              <td>
                {school.attributes.street}, {school.attributes.commune}
              </td>
            </tr>
            <tr>
              <td className="text" rowSpan="3">
                {school.attributes.language}
              </td>
              <td>{school.attributes.telephone}</td>
            </tr>
            <tr>
              <td>{school.attributes.email}</td>
            </tr>
            <tr>
              <td className="review">{school.attributes.siteWeb}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ))
  }
    </div >
}
