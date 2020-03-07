import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Card({ item }) {
	return (
		<>
			<div className="card m-3 text-center align-items-center" style={{ width: "300px" }}>
				<Link to={`/details/${item.url}`}>
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<p className="card-text">{item.model}</p>
						<p className="card-text">{item.birth_year}</p>
						<p className="card-text">{item.climate}</p>
					</div>
				</Link>
			</div>
		</>
	);
}
Card.propTypes = {
	item: PropTypes.object
	// 	name: PropTypes.string,
	// 	model: PropTypes.string,
	// 	birth_year: PropTypes.string,
	// 	climate: PropTypes.string,
	// 	url: PropTypes.string
};
