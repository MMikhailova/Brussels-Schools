import React from 'react'
import "../style/filters.css";
export default function Filters({ setSearchQuery }) {
  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchQuery({
      lang: e.target.lang.value,
      funding: e.target.funding.value,
      postecode: e.target.postecode.value,
      age:e.target.age.value
    })
  };
  return (
    <form className="form" onSubmit={handleSearchClick}>
      <select className="form-input" name="lang">
        <option defaultValue="" hidden>
          Language
        </option>
        <option value="french">French</option>
        <option value="dutch">Dutch</option>
        <option value="english">English</option>
        <option value="german">German</option>Language
      </select>
      <select className="form-input" name="funding">
        <option defaultValue="" hidden>
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
      <input
        name="age"
        className="form-input"
        type="text"
        placeholder="Children Ages (e.g 2,8)"
      ></input>
      <button type="submit" className="submit_btn">
        Find school
      </button>
    </form>
  );
}
