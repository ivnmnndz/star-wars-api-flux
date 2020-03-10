import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Jumbotron } from "../component/jumbotron";

export const Details = props => {
	useEffect(() => {
		fetch(props.match.params.url)
			.then(resp => resp.json())
			.then(data => {
				setList(data.results);
			});
	}, []);
	return (
		<div className="container">
			<div>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object,
	type: PropTypes.string,
	item: PropTypes.object,
	url: PropTypes.string
};
