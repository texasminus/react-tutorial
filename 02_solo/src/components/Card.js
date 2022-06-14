import React from "react";

export default function Card(props){
  return (
    <section className="card">
      <img className="card--img" src={props.card.imageUrl} />
      <div className="card--info">
        <span className="card--location">{props.card.location}</span>
        <span><a className="googlemaps" href={props.card.googleMapsUrl}>View on Google Maps</a></span>
        <h1 className="card--header">{props.card.title}</h1>
        <div className="card--date">{props.card.startDate} - {props.card.endDate}</div>
        <p className="card--description">{props.card.description}</p>
      </div>
    </section>
  )
}