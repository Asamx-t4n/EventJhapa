import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Card from "./Card";

export default function SimpleSlider() {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<div className="container">
			<div className="row">
				<Slider {...settings}>
					<div className="Home-slidebar">
						<div className="home-img-div">
							<span className="home-text">
								<i class="fa-solid fa-clock TIME"></i>
								<p className="TIME-LOC-CAL">8:00 PM</p>
								<i class="fa-solid fa-location-dot LOCATION"></i>
								<p className="TIME-LOC-CAL">Birtamode,Jhapa</p>
								<i class="fa-solid fa-calendar-days CALENDER"></i>
								<p className="TIME-LOC-CAL">sun,24 jun</p>
								<button className="Buy-Ticket">Buy ticket</button>
							</span>
							<img src="./EventJhapa/SushantKc.jpg" className="Home-img" />
						</div>
					</div>
					<div className="Home-slidebar">
						<div className="home-img-div">
							<span className="home-text">
								<i class="fa-solid fa-clock TIME"></i>
								<p className="TIME-LOC-CAL">9:00 PM</p>
								<i class="fa-solid fa-location-dot LOCATION"></i>
								<p className="TIME-LOC-CAL">damak,Jhapa</p>
								<i class="fa-solid fa-calendar-days CALENDER"></i>
								<p className="TIME-LOC-CAL">sun,24 jun</p>
								<button className="Buy-Ticket">Buy ticket</button>
							</span>
							<img src="./EventJhapa/nep1.jpg" className="Home-img" />
						</div>
					</div>
					<div className="Home-slidebar">
						<div className="home-img-div">
							<span className="home-text">
								<i class="fa-solid fa-clock TIME"></i>
								<p className="TIME-LOC-CAL">6:00 PM</p>
								<i class="fa-solid fa-location-dot LOCATION"></i>
								<p className="TIME-LOC-CAL">Baniyani,Jhapa</p>
								<i class="fa-solid fa-calendar-days CALENDER"></i>
								<p className="TIME-LOC-CAL">mon,24 jun</p>
								<button className="Buy-Ticket">Buy ticket</button>
							</span>
							<img src="./EventJhapa/Durgesh.jpg" className="Home-img" />
						</div>
					</div>
					<div className="Home-slidebar">
						<div className="home-img-div">
							<span className="home-text">
								<i class="fa-solid fa-clock TIME"></i>
								<p className="TIME-LOC-CAL">4:00 PM</p>
								<i class="fa-solid fa-location-dot LOCATION"></i>
								<p className="TIME-LOC-CAL">Birtamode,Jhapa</p>
								<i class="fa-solid fa-calendar-days CALENDER"></i>
								<p className="TIME-LOC-CAL">tue,17 jun</p>
								<button className="Buy-Ticket">Buy ticket</button>
							</span>
							<img src="./EventJhapa/Kumasagar.jpg" className="Home-img" />
						</div>
					</div>
				</Slider>
			</div>
			<div className="container">
				<div className="row">
					<h1 className="Top-bands">Top bands</h1>
					<div className=" col-12 brand-img-div">
						<div className=" col-md-2 col-sm-12 brand-img ">
							<img
								src="./EventJhapa/nep.jpg"
								className="brand-photo"
								alt="photo"
							/>
							<p className="brand-name">Nepathya</p>
						</div>
						<div className=" col-md-2 col-sm-12 brand-img">
							<img
								src="./EventJhapa/1974AD.jpg"
								className="brand-photo"
								alt="photo"
							/>
							<p className="brand-name">1974 AD</p>
						</div>
						<div className=" col-md-2 col-sm-12 brand-img">
							<img
								src="./EventJhapa/Cobweb.png"
								className="brand-photo"
								alt="photo"
							/>
							<p className="brand-name">Cobweb</p>
						</div>
						<div className=" col-md-2 col-sm-12 brand-img">
							<img
								src="./EventJhapa/Mongolian Heart.jpg"
								className="brand-photo"
								alt="photo"
							/>
							<p className="brand-name">Mongolian Heart</p>
						</div>
						<div className=" col-md-2 col-sm-12 brand-img">
							<img
								src="./EventJhapa/Kutumba.png"
								className="brand-photo"
								alt="photo"
							/>
							<p className="brand-name">Kutumba</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container UPCOMMING-EVENTS">
				<div className="row">
					<h1 className="UPCOMMING-TITLE">Up Comming Events and festivals</h1>
					<div className="col-md-12 col-lg-6 col-sm-12 Main-event Small-cards">
						<Card
							Title="Dashain"
							Date="2025-09-22"
							src="./EventJhapa/Dashain.jpg"
							size="big"
							description="Dashain is the biggest Hindu festival in Nepal, celebrating the victory of good over evil through Goddess Durga’s power. Families gather to receive blessings, wear tika and jamara, and share happiness."
						/>
					</div>
					<div className="col-md-12 col-lg-6 col-sm-12">
						<div className="row">
							<div className="col-md-6 col-sm-6 Small-cards">
								<Card
									Title="Event"
									Date="2025-09-22"
									src="./EventJhapa/Cobweb.png"
									size="small"
									location="Jhapa,damak"
								/>
							</div>
							<div className="col-md-6 col-sm-6  Small-cards">
								<Card
									Title="Event"
									Date="2025-09-22"
									src="./EventJhapa/SushantKc.jpg"
									size="small"
									location="Jhapa,jhiljile"
								/>
							</div>
							<div className="col-md-6 col-sm-6  Small-cards">
								<Card
									Title="Event"
									Date="2025-09-22"
									src="./EventJhapa/nep.jpg"
									size="small"
									location="Jhapa,charali"
								/>
							</div>
							<div className="col-md-6 col-sm-6  Small-cards">
								<Card
									Title="Event"
									Date="2025-09-22"
									src="./EventJhapa/Kumasagar.jpg"
									size="small"
									location="Jhapa,laxmipur"
								/>
							</div>
							<div className="col-md-6 col-sm-6  Small-cards">
								<Card
									Title="Event"
									Date="2025-09-22"
									src="./EventJhapa/Durgesh.jpg"
									size="small"
									location="Jhapa,bagan"
								/>
							</div>
							<div className="col-md-6 col-sm-6  Small-cards">
								<Card
									Title="Festival"
									Date="2025-09-22"
									src="./EventJhapa/Dashain.jpg"
									size="small"
									location="Jhapa,Birtacity"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
