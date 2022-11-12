import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import RQSuperHeros from "../components/RQSuperHeros";
import RQSuperHero from "../components/RQSuperHero";
import ParallelQueries from "../components/ParallelQueries";
import RefetchQueries from "../components/RefetchQueries";
const { Header, Footer, Content } = Layout;

const MainLayout = () => {
	return (
		<Layout>
			<Header>Header</Header>
			<Content>
				{" "}
				<Router>
					<div>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
						</ul>
						<ul>
							<li>
								<Link to="/superHeros">Super Heros</Link>
							</li>
						</ul>
						<ul>
							<li>
								<Link to="/parallel">Parallel Queries</Link>
							</li>
						</ul>
						<ul>
							<li>
								<Link to="/refetch">Refetch Queries</Link>
							</li>
						</ul>
					</div>
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route exact path="/superHeros" element={<RQSuperHeros />} />
						<Route exact path="/superHero/:id" element={<RQSuperHero />} />
						<Route exact path="/parallel" element={<ParallelQueries />} />
						<Route exact path="/refetch" element={<RefetchQueries />} />
					</Routes>
				</Router>
			</Content>
			<Footer>Footer</Footer>
		</Layout>
	);
};

export default MainLayout;
