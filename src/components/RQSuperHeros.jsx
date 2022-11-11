import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RQSuperHeros = () => {
	const fetchFunction = () => {
		return axios.get("http://localhost:4000/superheroes");
	};
	const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
		"super-hero",
		fetchFunction,
    {
      enabled:false
    }
	);

	if (isLoading) {
		return <h2>Loading...</h2>;
	} else if (isError) {
		return <h2>{error.message}</h2>;
	}else if(isFetching){
		return <h2>Fetch Again..</h2>;
  }
	return (
		<>
			<h1>Super Hero List</h1>
      <button onClick={refetch}>Refetch Data</button>
			{data?.data.map((v, i) => {
				return (
					<ul>
						<li key={i}>{v.name}</li>
					</ul>
				);
			})}
		</>
	);
};

export default RQSuperHeros;
