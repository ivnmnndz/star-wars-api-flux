import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Jumbotron } from "../component/jumbotron";

export const Details = props => {
	const [list, setList] = useState({});
	const [lastDetail, setLastDetail] = useState("");
	const fetchData = () => {
		const fetchUrl = atob(props.match.params.url);
		fetch(fetchUrl)
			.then(resp => resp.json())
			.then(data => {
				if (data.name === lastDetail) fetchData();
				else setList(data);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="container">
			<div>
				<div
					onClick={() => {
						setLastDetail(list.name);
					}}>
					{Object.keys(list).map((keyName, index) => {
						return <Jumbotron key={index} name={keyName} value={list[keyName]} />;
					})}
				</div>
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
