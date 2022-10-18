import React from 'react'
import "../style/filters.css";
export default function Filters() {
  return (
    <form className="form">
      <select className="form-input">
        <option value="" disabled selected hidden>
          Language
        </option>
        <option value="french">French</option>
        <option value="dutch">Dutch</option>
        <option value="english">English</option>
        <option value="german">German</option>Language
      </select>
      <select className="form-input">
        <option value="" disabled selected hidden>
          Funding type
        </option>
        <option value="public">Public</option>
        <option value="private">Private</option>Type
      </select>
      <input
        type="number"
        className="form-input"
        placeholder="Postcode"
        min="1000"
        max="1200"
      ></input>
      <input
        className="form-input"
        type="text"
        placeholder="Children Ages (e.g 2,8)"
      ></input>
      <button id="submit_btn">Find school</button>
    </form>
  );
}
