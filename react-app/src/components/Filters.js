import React from 'react'
import "../style/filters.css";
export default function Filters() {
  return (
    <form className="filters">
      <select className="lan">
        <option value="french">French</option>
        <option value="dutch">Dutch</option>
        <option value="english">English</option>
        <option value="german">German</option>
      </select>
      <input type="text" placeholder="Children Ages (e.g 2,8)"></input>
      <input type="number" placeholder="Postcode" min="1000" max="1200"></input>
      <select id="funding">
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      <button>Find school</button>
    </form>
  );
}
