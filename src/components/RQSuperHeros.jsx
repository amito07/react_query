import React from "react";
import { Link } from "react-router-dom";
import { UseSuperHeros } from "../customHooks/useSuperHeroHooks";

const RQSuperHeros = () => {
	const onSuccess = (data) => {
		console.log("Data received from Super Heros: ", data);
	};
	const onError = (err) => {
		console.log("Something went wrong Super Heros", err);
	};
	const { isLoading, data, isError, error, isFetching, refetch } =
		UseSuperHeros(onSuccess, onError);

	if (isLoading) {
		return <h2>Loading...</h2>;
	} else if (isError) {
		return <h2>{error.message}</h2>;
	} else if (isFetching) {
		return <h2>Fetch Again..</h2>;
	}
	return (
		<>
			<h1>Super Hero List</h1>
			<button onClick={refetch}>Refetch Data</button>
			{data?.data.map((v, i) => {
				return (
					<ul key={i}>
						<li key={i}>
							<Link to={`/superHero/${v.id}`}>{v.name}</Link>
						</li>
					</ul>
				);
			})}
		</>
	);
};

export default RQSuperHeros;
