import React from "react";
import { UseSuperHeros } from "../customHooks/useSuperHeroHooks";
const RefetchQueries = () => {
	const onSuccess = (data) => {
		console.log("Data received from Super Heros: ", data);
	};
	const onError = (err) => {
		console.log("Something went wrong Super Heros", err);
	};
	const { isLoading, data, isError, error, isFetching, refetch } =
		UseSuperHeros(onSuccess, onError);
        console.log("Refetch Data",data)
	return (
		<div>
			<h1>RefetchQueries</h1>
		</div>
	);
};

export default RefetchQueries;
