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
        <option value="german">German</option>Language
      </select>
      <select className="form-input" name="funding">
        <option value="" hidden>
          Funding type
        </option>
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
        <option value="" hidden>
          Stage of education
        </option>
        <option value="preschool">Preschool</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
      </select>
      <button type="submit" className="submit_btn">
        Find school
      </button>
    </form>
  );
}
