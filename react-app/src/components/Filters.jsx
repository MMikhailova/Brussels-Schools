import React from 'react'


import "../style/filters.css";
export default function Filters({ setSearchQuery }) {

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchQuery({
      language: e.target.lang.value,
      funding: e.target.funding.value,
      posteCode: e.target.postecode.value,
      type:e.target.type.value
    })

  };
  return (
    <form className="form" onSubmit={handleSearchClick}>
      <select className="form-input" name="lang">
        <option value="">Language</option>
        <option value="french">French</option>
        <option value="dutch">Dutch</option>
        <option value="english">English</option>
      </select>
      <select className="form-input" name="funding">
        <option value="">Funding type</option>
        <option value="public">Public</option>
        <option value="private">Private</option>Type
      </select>
      <input
        name="postecode"
        type="number"
        className="form-input"
        placeholder="Postcode"
        min="1000"
        max="1200"
      ></input>
      <select className="form-input" name="type">
        <option value="">Type of education</option>
        <option value="Maternel">Kindergarten</option>
        <option value="Primaire">Primary school</option>
        <option value="Supérieur">College/High school</option>Type
      </select>
      <button type="submit" className="submit_btn">
        Find school
      </button>
    </form>
  );
}
