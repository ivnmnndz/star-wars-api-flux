import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<Link to={"/overall"}>
			<span>Link to: Star Wars API</span>
		</Link>
	</div>
);
