import React from "react";
import Slider from "react-slick";
import "./Tournaments.css";
import Card from "./Card";

export default function SimpleSlider({ UpData, PreData, search }) {
	const Filter = UpData.filter((item) => {
		return item.Title.toLowerCase().includes(search.toLowerCase());
	});
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="container Tournaments-div">
			<div className="row tournament-div-1">
				<h1 className="Tournament-Title">UpCommingTournaments</h1>
				<Slider {...settings}>
					{Filter.map((item) => (
						<Card
							key={item.id}
							{...item}
							type="Tournament"
							mapSrc={false}
							BuyTicket={false}
						/>
					))}
				</Slider>
			</div>

			<div className="row tournament-div-1 ">
				<h1 className="Tournament-Title">Previous Tournament</h1>
				<Slider {...settings}>
					{PreData.map((items) => (
						<Card
							key={items.id}
							{...items}
							type="Tournament"
							mapSrc={false}
							BuyTicket={false}
							Details={false}
						/>
					))}
				</Slider>
			</div>
		</div>
	);
}
