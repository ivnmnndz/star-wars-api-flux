import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card.js";

export const Starship = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/starships/")
			.then(resp => resp.json())
			.then(data => {
				setList(data.results);
			});
	}, []);

	return (
		<>
			<div>
				{list.map((item, index) => {
					return <Card key={index} name={item.name} model={item.model} />;
				})}
			</div>
		</>
	);
};
