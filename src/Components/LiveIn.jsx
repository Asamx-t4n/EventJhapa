import Card from "./Card";
import "./LiveIn.css";
import { LiveUpData } from "./AllData";

const LiveIn = () => {
	return (
		<div className="live-container">
			<div className="live-row">
				{LiveUpData.map((item, index) => (
					<div key={index} className="live-col">
						<Card {...item} Live={true} Details={false} />
					</div>
				))}
			</div>
		</div>
	);
};

export default LiveIn;
