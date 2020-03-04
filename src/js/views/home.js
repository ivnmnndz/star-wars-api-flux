import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<Link to={"/starship"}>
			<span>Link to: Starships</span>
		</Link>
		<Link to={"/people"}>
			<span>Link to: People</span>
		</Link>
	</div>
);
