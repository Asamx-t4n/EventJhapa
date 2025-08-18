import "./SignIn.css";

const SignIn = () => {
	return (
		<div className="SignIn-container">
			<div className="SignIn-box">
				<h2 className="SignIn-title">Jhapa Event Login</h2>
				<form className="SignIn-form">
					<label className="SignIn-label" htmlFor="email">
						Email
					</label>
					<input
						className="SignIn-input"
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email"
					/>

					<label className="SignIn-label" htmlFor="password">
						Password
					</label>
					<input
						className="SignIn-input"
						type="password"
						name="password"
						id="password"
						placeholder="Enter your password"
					/>

					<button type="submit" className="SignIn-button">
						Log In
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
