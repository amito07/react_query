import { useQuery } from "react-query";
import axios from "axios";
const fetchAllHeros = () => {
	return axios.get("http://localhost:4000/superheroes");
};

const fetchOneHeros = ({ queryKey }) => {
	const id = queryKey[1];
	return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export const useSuperHeros = (onSuccess, onError) => {
	return useQuery("super-hero", fetchAllHeros, {
		enabled: false,
		refetchIntervalInBackground: true,
		onSuccess,
		onError,
	});
};

export const useSuperHero = (onSuccess, onError, id) => {
	return useQuery(["super-hero-one", id], fetchOneHeros, {
		onSuccess,
		onError,
	});
};
