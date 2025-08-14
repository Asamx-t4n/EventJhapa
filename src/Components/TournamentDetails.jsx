import { useParams } from "react-router-dom";
import { UpData, ConUpData, FestUpData } from "./AllData";
import Card from "./Card";
import "./TournamentDetails.css";

const TournamentsDetails = () => {
	let event = null;
	const { id, type } = useParams();
	const lowerType = type.toLowerCase();
	if (lowerType === "tournament") {
		event = UpData.find((item) => item.id === parseInt(id));
	} else if (lowerType === "concert") {
		event = ConUpData.find((item) => item.id === parseInt(id));
	} else if (lowerType === "festival") {
		event = FestUpData.find((item) => item.id === parseInt(id));
	}
	if (!event) {
		return (
			<div className="container TournamentsDetails">
				<h2>Sorry, event not found.</h2>
			</div>
		);
	}

	return (
		<div className="container TournamentsDetails">
			<div className="row">
				<div className="col-md-6 col-sm-12">
					<Card
						key={event.id}
						{...event}
						Details={false}
						bigDescription={false}
						mapSrc={false}
					/>
				</div>
				<div className="col-md-6 col-sm-12">
					<h1 className="Here-you-go">Here you go,</h1>
					<div>
						{event.mapSrc ? (
							<iframe className="Card-map" src={event.mapSrc}></iframe>
						) : (
							<p className="Card-bigDescription">
								{event.bigDescription || "No details available"}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default TournamentsDetails;
