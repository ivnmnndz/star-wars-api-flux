import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Jumbotron({ item }) {
	return (
		<>
			<div className="jumbotron" item={item} />
		</>
	);
}

Jumbotron.propTypes = {
	item: PropTypes.object
};
