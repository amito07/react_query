import { useQuery } from "react-query";
import axios from "axios";

const fetchFunction = () => {
	return axios.get("http://localhost:4000/superheroes");
};
export const useSuperHerosData = (onSuccess, onError,isQueryEnabled) => {
	return useQuery("super-hero", fetchFunction, {
		enabled: isQueryEnabled ? isQueryEnabled : false,
		refetchOnMount: true,
		onSuccess,
		onError,
	});
};

export default useSuperHerosData;
