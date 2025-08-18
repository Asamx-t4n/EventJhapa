import React, { useState } from "react";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Tournaments from "./Components/Tournaments";
import TournamentsDetails from "./Components/TournamentDetails";
import Concert from "./Components/Concert";
import Festival from "./Components/Festival";
import FindTickets from "./Components/FindTickets";
import LiveIn from "./Components/LiveIn";
import {
	UpData,
	PreData,
	ConUpData,
	ConPreData,
	FestUpData,
	FestPreData,
} from "./Components/AllData";
import SignIn from "./Components/SignIn";
import Live from "./Components/LiveIn";

const App = () => {
	const [search, setSearch] = useState("");
	const [isOpen, setIsOpen] = useState(true);
	const navigate = useNavigate();

	const changePage = (e) => {
		if (e.target.value) {
			navigate(e.target.value);
		}
	};

	const HandlePage = (e) => {
		if (e.key === "Enter") {
			if (
				UpData.find((item) =>
					item.Title.toLowerCase().includes(search.toLowerCase())
				)
			) {
				navigate("/tournaments");
			} else if (
				FestUpData.find((item) =>
					item.Title.toLowerCase().includes(search.toLowerCase())
				)
			) {
				navigate("/festival");
			} else if (
				ConUpData.find((item) =>
					item.Title.toLowerCase().includes(search.toLowerCase())
				)
			) {
				navigate("/concert");
			} else {
				alert("Event not found!");
			}
			setSearch("");
		}
	};

	return (
		<div className="container">
			{/* Navigation */}
			<nav className="nav">
				<h2 className="nav_logo">Jhapa Events</h2>
				<input
					className="nav_search"
					type="text"
					placeholder="Search Event"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={HandlePage}
				/>
				<div className={isOpen ? "navbar" : "mob"}>
					<NavLink to="/" className="nav-link">
						Home
					</NavLink>

					<NavLink to="/LiveIn" className="nav-link">
						<i class="fa-solid fa-circle-dot Live-Dot"></i>Live
					</NavLink>

					<NavLink to="/FindTickets" className="nav-link">
						find tickets
					</NavLink>

					<select
						onChange={changePage}
						className="event-select"
						style={{ textAlign: "center", marginLeft: "2rem" }}
					>
						<option value="/">Events</option>
						<option value="/tournaments">Tournament</option>
						<option value="/concert">Concert</option>
						<option value="/festival">Festival</option>
						<option value="/">Other Events</option>
					</select>

					<NavLink to="/SignIn" className="nav-link">
						Sign
					</NavLink>
				</div>
				<i
					className="fa-solid fa-bars Burger"
					onClick={() => setIsOpen(!isOpen)}
				></i>
			</nav>
			<div className="Display-Data">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/tournaments"
						element={
							<Tournaments PreData={PreData} UpData={UpData} search={search} />
						}
					/>
					<Route
						path="/concert"
						element={
							<Concert
								ConUpData={ConUpData}
								ConPreData={ConPreData}
								search={search}
							/>
						}
					/>
					<Route
						path="/festival"
						element={
							<Festival
								FestUpData={FestUpData}
								FestPreData={FestPreData}
								search={search}
							/>
						}
					/>
					<Route path="/Details/:type/:id" element={<TournamentsDetails />} />
					<Route path="/FindTickets" element={<FindTickets />} />
					<Route path="/SignIn" element={<SignIn />} />
					<Route path="/LiveIn" element={<LiveIn />} />
				</Routes>
			</div>
			<div className="container ">
				<footer className="row Footer">
					<div className="col-md-4 col-sm-6 Footer-logo-div ">
						<img
							className="Footer-logo"
							src="/EventJhapa/logo.jpg"
							alt="logo"
						/>
						<div className="Footer-icon">
							<i class="fa-brands fa-facebook me-2"></i>
							<i class="fa-brands fa-twitter me-2"></i>
							<i class="fa-brands fa-instagram"></i>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 Footer-copyright-div">
						<span className="Footer-copyright"> ©sam-X</span>
					</div>
					<div className="col-md-4 col-sm-6 Footer-contact-div">
						<p>Contact Us</p>
						<p>
							<i class="fa-solid fa-location-dot"></i>Jhapa,Birtamode
						</p>
						<p>
							<i class="fa-solid fa-phone"></i>+977 986232798
						</p>
						<p>
							<i class="fa-solid fa-at"></i>samratbhattarai@gmail.com
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default App;
