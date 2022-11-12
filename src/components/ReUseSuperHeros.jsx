import React, { useState } from "react";
import useSuperHerosData from "../customHooks/useSuperHerosData";

const ReUseSuperHeros = () => {
	const [isQueryEnabled, setisQueryEnabled] = useState(false);
	const onSuccess = (data) => {
		console.log("Reuse Super from server", data);
		if (data) {
			setisQueryEnabled(true);
		}
	};
	const onError = (err) => {
		console.log("Fail Reuse Super from server", err);
	};
	const { isLoading, data, isError, error, isFetching, refetch } =
		useSuperHerosData(onSuccess, onError, isQueryEnabled);
	if (isLoading) {
		return <h2>Loading...</h2>;
	} else if (isError) {
		return <h2>{error.message}</h2>;
	} else if (isFetching) {
		return <h2>Fetch Again..</h2>;
	}
	return (
		<div>
			<h1>Reuse Heros Data</h1>
			<button onClick={refetch}>Again Data</button>
			{data?.data.map((v, i) => {
				return (
					<ul key={i}>
						<li key={i}>{v.name}</li>
					</ul>
				);
			})}
		</div>
	);
};

export default ReUseSuperHeros;
