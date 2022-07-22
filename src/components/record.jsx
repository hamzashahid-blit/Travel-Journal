import React from "react";
import LocationIcon from "../assets/location-icon.png";

function Record(props) {
  const data = props.data;
  return (
    <div className="record">
      <img className="record--image" src={require(`../assets/${data.image}`)} />
      <div className="record--info">
        <span className="record--sub-header">
          <img className="record--location-icon" src={LocationIcon} />
          <h2 className="record--country">{data.country}</h2>
          <a className="record--maps" href="#">
            View on Google Maps
          </a>
        </span>
        <h1 className="record--location">{data.location}</h1>
        <h3 className="record--date">{data.date}</h3>
        <p className="record--description">{data.description}</p>
      </div>
    </div>
  );
}

export default Record;
