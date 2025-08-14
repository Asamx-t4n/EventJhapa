import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({
	Details,
	id,
	Title,
	Date,
	src,
	location,
	description,
	size,
	mapSrc,
	BuyTicket,
	type,
	bigDescription,
}) => {
	return (
		<div
			className={`Card-div ${
				size === "small"
					? "small-card"
					: size === "mid"
					? "mid-card"
					: "big-card"
			}`}
		>
			<img className="Card-img" src={src} alt={Title} />
			<span className="Card-title">{Title}</span>
			<span className="Card-Date">
				<i class="fa-solid fa-calendar-days"></i>
				{Date}
			</span>
			{location && (
				<span className="Card-location">
					<i class="fa-solid fa-location-dot "></i>
					{location}
				</span>
			)}
			{description && <span className="Card-description">{description}</span>}
			{Details && (
				<Link to={`/Details/${type}/${id}`}>
					<button className="Card-Button1">More Details</button>
				</Link>
			)}
			{mapSrc && <iframe src={mapSrc}></iframe>}
			{BuyTicket && <button className="Card-Button2">Buy Ticket</button>}
			{bigDescription && (
				<span className="Card-bigDescription">{bigDescription}</span>
			)}
		</div>
	);
};
export default Card;
