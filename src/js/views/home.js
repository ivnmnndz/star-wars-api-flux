import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5 container">
		<ul className="list-group">
			<li>
				<Link to={"/starships"}>
					<span>Starships</span>
				</Link>
			</li>
			<li>
				<Link to={"/people"}>
					<span>People</span>
				</Link>
			</li>
			<li>
				<Link to={"/planets"}>
					<span>Planets</span>
				</Link>
			</li>
		</ul>
	</div>
);
