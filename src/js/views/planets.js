import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card.js";

export const Planets = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/planets/")
			.then(resp => resp.json())
			.then(data => {
				setList(data.results);
			});
	}, []);

	return (
		<>
			<div>
				{list.map((item, index) => {
					return <Card key={index} item={item} type="planets" index={index} />;
				})}
			</div>
		</>
	);
};
