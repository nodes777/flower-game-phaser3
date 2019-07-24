import React from "react";
import NewFlowerFromPunnettButton from "./NewFlowerFromPunnettButton";
import NewRandomFlowerButton from "./NewRandomFlowerButton";
import BeeCanFlyButton from "./BeeCanFlyButton";
import RemoveRecessiveAllele from "./RemoveRecessiveAllele";
import AddRecessiveAllele from "./AddRecessiveAllele";
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
				<AddRecessiveAllele alleleType="color" />
			</div>
			<div>
				<RemoveRecessiveAllele alleleType="color" />
			</div>
			<div>
				<AddRecessiveAllele alleleType="shape" />
			</div>
			<div>
				<RemoveRecessiveAllele alleleType="shape" />
			</div>
			<div>
				<SaveToLocalStorageButton />
			</div>
		</div>
	);
};

export default Dashboard;
