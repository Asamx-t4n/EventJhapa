import Card from "./Card";
import "./LiveIn.css";
import { LiveUpData } from "./AllData";
const LiveIn = () => {
	return (
		<div className="container">
			<div className="row">
				{LiveUpData.map((item) => (
					<div className="col-md-4 col-sm-6 LiveDiv">
						<Card {...item} Live={true} Details={false} />
					</div>
				))}
			</div>
		</div>
	);
};
export default LiveIn;
