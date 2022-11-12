import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchFunction = () => {
	return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeros = () => {
	const onSuccess = (data) => {
		console.log("Data received from server: ",data);
	};
	const onError = (err) => {
		console.log("Something went wrong",err)
	};
	const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
		"super-hero",
		fetchFunction,
		{
			enabled: false,
			refetchIntervalInBackground:true,
			onSuccess,
			onError,
			select:(data)=>{
				const superHerosName = data.data.map((v)=> v.name)
				return superHerosName;
			}
		}
	);

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
			{/* {data?.data.map((v, i) => {
				return (
					<ul key={i}>
						<li key={i}>{v.name}</li>
					</ul>
				);
			})} */}
			{data?.map((v) => {
				return (
					<ul key={v}>
						<li key={v}>{v}</li>
					</ul>
				);
			})}
		</>
	);
};

export default RQSuperHeros;
