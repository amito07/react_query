import { useQuery } from "react-query";
import axios from "axios";
const fetchAllHeros = () => {
	return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
	return axios.get("http://localhost:4000/friends");
};

const fetchOneHeros = ({ queryKey }) => {
	const id = queryKey[1];
	return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export const UseSuperHeros = (onSuccess, onError) => {
	return useQuery("super-hero", fetchAllHeros, {
		onSuccess,
		onError,
	});
};

export const UseSuperHero = (onSuccess, onError, id) => {
	return useQuery(["super-hero-one", id], fetchOneHeros, {
		onSuccess,
		onError,
	});
};

export const Usefriends = (onSuccess, onError) => {
	return useQuery("friends", fetchFriends, {
		onSuccess,
		onError,
	});
};
