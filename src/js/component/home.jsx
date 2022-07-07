import React from "react";
import List from "./list.jsx"

const Home = () => {

	return (
		<div className="container text-center">
			<h1 className="todo-header m-2">To do List</h1>
			<List />
		</div>
	);
};

export default Home;
