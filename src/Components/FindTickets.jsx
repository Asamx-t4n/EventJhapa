import "./FindTickets.css";

const FindTickets = () => {
	return (
		<div className="container FindTicketDiv">
			<div className="row">
				<div className="col-md-6 col-sm-6 FindTicket">
					<span className="FindTicketCap">
						What email did you use to buy tickets?
					</span>

					<input type=" text" placeholder="Email" className="FindTicketInput" />
					<button className="GetTicket">Get</button>
				</div>
				<div className="col-md-6 col-sm-6 FindTicketAdver">
					<img src="/SonuNigam.jpg" className="FindTicketAdverImg" alt="IMG" />
				</div>
			</div>
		</div>
	);
};
export default FindTickets;
