import React from "react";
import { Usefriends, UseSuperHeros } from "../customHooks/useSuperHeroHooks";

const ParallelQueries = () => {
	const onSuccessFriends = (data) => {
		console.log("Data received from Friends: ", data);
	};
	const onErrorFriends = (err) => {
		console.log("Something went wrong Friends ", err);
	};
	const onSuccessHeros = (data) => {
		console.log("Data received from Heros: ", data);
	};
	const onErrorHeros = (err) => {
		console.log("Something went wrong Heros", err);
	};
	const {
		isLoading: friendLoading,
		data: friendData,
		isError: IsfriendError,
		error: friendError,
		isFetching: friendFetch,
	} = Usefriends(onSuccessFriends, onErrorFriends);
	const {
		isLoading: herosLoading,
		data: herosData,
		isError: IsherosError,
		error: HerosError,
		isFetching: HerosFetch,
	} = UseSuperHeros(onSuccessHeros, onErrorHeros);

	if (friendLoading || friendFetch) {
		return <h2>Friends Loading...</h2>;
	} else if (IsfriendError) {
		return <h2>{friendError.message}</h2>;
	}
	if (herosLoading || HerosFetch) {
		return <h2>Heros Loading...</h2>;
	} else if (IsherosError) {
		return <h2>{HerosError.message}</h2>;
	}

	return (
		<div>
			<h1>ParallelQueries</h1>
			<div>
				{friendData.data.map((friend, i) => {
					return <div key={i}>{friend.name}</div>;
				})}
			</div>
			<div>
				{herosData.data.map((hero, i) => {
					return <div key={i}>{hero.name}</div>;
				})}
			</div>
		</div>
	);
};

export default ParallelQueries;
