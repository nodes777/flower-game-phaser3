import React from "react";
import NewFlowerFromPunnettButton from "./NewFlowerFromPunnettButton";
import NewRandomFlowerButton from "./NewRandomFlowerButton";
import BeeCanFlyButton from "./BeeCanFlyButton";
import RemoveRecessiveTrait from "./RemoveRecessiveTrait";
import AddRecessiveTrait from "./AddRecessiveTrait";
import SaveToLocalStorageButton from "./SaveToLocalStorageButton";
import "../../css/App.css";

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
				<AddRecessiveTrait traitType="color" />
			</div>
			<div>
				<RemoveRecessiveTrait traitType="color" />
			</div>
			<div>
				<AddRecessiveTrait traitType="shape" />
			</div>
			<div>
				<RemoveRecessiveTrait traitType="shape" />
			</div>
			<div>
				<SaveToLocalStorageButton />
			</div>
		</div>
	);
};

export default Dashboard;
