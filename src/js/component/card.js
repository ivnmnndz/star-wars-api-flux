import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Card({ item, type, index }) {
	return (
		<>
			<div className="card m-3 text-center align-items-center" style={{ width: "300px" }}>
				{type} - {item.url}
				<Link to={`/details/${btoa(item.url)}`}>
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						{item.model ? <p className="card-text">{item.model}</p> : null}
						{item.birth_year ? <p className="card-text">{item.birth_year}</p> : null}
						{item.climate ? <p className="card-text">{item.climate}</p> : null}
					</div>
				</Link>
			</div>
		</>
	);
}
Card.propTypes = {
	item: PropTypes.object,
	type: PropTypes.string,
	url: PropTypes.string
	// 	name: PropTypes.string,
	// 	model: PropTypes.string,
	// 	birth_year: PropTypes.string,
	// 	climate: PropTypes.string,
};
