import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<>
			<div className="card m-3 text-center align-items-center" style={{ width: "300px" }}>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.model}</p>
				</div>
			</div>
		</>
	);
}
Card.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string
};
