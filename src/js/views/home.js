import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5 container">
		<ul className="list-group">
			<li className="list-group-item">
				<Link to={"/starships"}>
					<span>Starships</span>
				</Link>
			</li>
			<li className="list-group-item">
				<Link to={"/people"}>
					<span>People</span>
				</Link>
			</li>
			<li className="list-group-item">
				<Link to={"/planets"}>
					<span>Planets</span>
				</Link>
			</li>
		</ul>
	</div>
);
