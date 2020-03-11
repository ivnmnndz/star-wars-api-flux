import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Jumbotron } from "../component/jumbotron";

export const Details = props => {
	const [list, setList] = useState({});
	const [lastDetail, setLastDetail] = useState("");
	useEffect(() => {
		console.log("useEffect");
		const fetchData = () => {
			const fetchUrl = atob(props.match.params.url);
			console.log(fetchUrl);
			fetch(fetchUrl)
				.then(resp => resp.json())
				.then(data => {
					if (data.name === lastDetail) return fetchData();
					else setList(data);
					console.log(data);
				});
		};
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
						console.log(keyName, list[keyName]);
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
