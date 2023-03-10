import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css"

export default function Map({ searchResults }) {
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
      {searchResults.map((school) => (
        school.fields.latitude&&school.fields.longitude&&
        <Marker
          key={school.recordid}
          position={[school.fields.latitude, school.fields.longitude]}
        >
          <Popup>
            <h3>{school.fields.nom_de_l_etablissement}</h3>
            {/* <p>{school.attributes.email}</p> */}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
