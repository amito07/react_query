import React from "react";
import { useSuperHero } from "../customHooks/useSuperHeroHooks";
import { useParams } from "react-router-dom";

const RQSuperHero = () => {
	const { id } = useParams();
	const onSuccess = (data) => {
		console.log("Data received from Super Hero Page: ", data);
	};
	const onError = (err) => {
		console.log("Something went wrong Hero Page", err);
	};

	const { data } = useSuperHero(onSuccess, onError, id);
	console.log(data);
	return (
		<div>
			<h1>RQSuperHero</h1>
			{
				<>
					<div>
						<h3>{data?.data.name}</h3>
						<h4>{data?.data.alterEgo}</h4>
					</div>
				</>
			}
		</div>
	);
};

export default RQSuperHero;
