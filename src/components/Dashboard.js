import React from "react";
import NewFlowerFromPunnettButton from "./NewFlowerFromPunnettButton";
import NewRandomFlowerButton from "./NewRandomFlowerButton";
import BeeCanFlyButton from "./BeeCanFlyButton";
import AddRecessiveColor from "./AddRecessiveColor";
import "../css/App.css";
const Dashboard = props => {
	return (
		<div className="dashboard">
			<h1>Dashboard</h1>
			<div>
				<BeeCanFlyButton />
			</div>
			<div>
				<NewFlowerFromPunnettButton />
			</div>
			<div>
				<NewRandomFlowerButton />
			</div>
			<div>
				<AddRecessiveColor />
			</div>
		</div>
	);
};

export default Dashboard;
