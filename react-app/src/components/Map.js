import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css"
import { schools } from "../schools";


export default function Map() {
  return (
    <MapContainer
      center={[50.8552114, 4.3053775]}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {schools.map((school) => (
        <Marker
          key={[school.lat, school.long]}
          position={[school.lat, school.long]}
        >
          <Popup>
            {school.name}<br/>{school.contact}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
