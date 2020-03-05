import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Details = props => {
	useEffect(() => {
		fetch("https://swapi.co/api/" + props.match.params.ivan)
			.then(resp => resp.json())
			.then(data => {
				setList(data.results);
			});
	}, []);
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.match.params.theme}</h1>
			<h1 className="display-4">{props.match.params.index}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};
