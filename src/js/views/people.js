import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card.js";

export const People = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setList(data.results);
			});
	}, []);

	return (
		<>
			<div>
				{list.map((item, index) => {
					return <Card key={index} item={item} type="people" />;
				})}
			</div>
		</>
	);
};
