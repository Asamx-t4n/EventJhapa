import React, { useState } from "react";

const App = () => {
	const [count, setCount] = useState("");
	return (
		<div>
			<h1>number:{count}</h1>
			<div>
				<button
					className="increase"
					onClick={(e) => setCount((prev) => prev + 1)}
				>
					Increase
				</button>
				<button
					className="increase"
					onClick={(e) => setCount((prev) => prev - 1)}
				>
					decrease
				</button>
			</div>
		</div>
	);
};
export default App;
