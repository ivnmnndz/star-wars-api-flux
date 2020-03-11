import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Jumbotron({ value, name }) {
	return (
		<>
			<div className="jumbotron">
				<span>{name}</span> -
				{typeof value === "string" ? (
					<span>{value}</span>
				) : (
					<ul>
						{value.map((item, index) => {
							return (
								<li key={index}>
									<Link to={`/details/${btoa(item)}`}>
										<span>{item}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</>
	);
}

Jumbotron.propTypes = {
	value: PropTypes.any,
	name: PropTypes.string
};
