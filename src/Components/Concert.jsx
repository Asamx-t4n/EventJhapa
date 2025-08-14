import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "./Concert.css";

export default function SimpleSlider({ ConUpData, ConPreData, search }) {
	const Filter = ConUpData.filter((item) => {
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
			},
			{
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
				<h1 className="Tournament-Title">UpComming Concerts</h1>
				<Slider {...settings}>
					{Filter.map((item) => (
						<Card
							key={item.id}
							{...item}
							type="concert"
							mapSrc={false}
							BuyTicket={false}
						/>
					))}
				</Slider>
			</div>

			<div className="row tournament-div-1 ">
				<h1 className="Tournament-Title">Previous Concerts</h1>
				<Slider {...settings}>
					{ConPreData.map((items) => (
						<Card
							key={items.id}
							{...items}
							type="concert"
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
