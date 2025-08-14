import "./SignIn.css";

const SignIn = () => {
	return (
		<div className="container">
			<div className="row ">
				<div className="col-12 SignIn-div">
					<div className="SignIn-input">
						<span className="SignIn-Title">Jhapa Event login</span>
						<label className="SignIn-name">Email</label>
						<input className="SignInput" type="email" name="email" />
						<label className="SignIn-name">password</label>
						<input className="SignInput" type="password" name="email" />
						<button className="SignIn-button">LogIn</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SignIn;
