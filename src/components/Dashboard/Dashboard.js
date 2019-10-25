import React from "react";
import NewFlowerFromPunnettButton from "./NewFlowerFromPunnettButton";
import NewRandomFlowerButton from "./NewRandomFlowerButton";
import BeeCanFlyButton from "./BeeCanFlyButton";
import RemoveRecessiveAllele from "./RemoveRecessiveAllele";
import AddRecessiveAllele from "./AddRecessiveAllele";
import SaveToLocalStorageButton from "./SaveToLocalStorageButton";
import ClearLocalStorageButton from "./ClearLocalStorageButton";
import "../../css/App.css";

const Dashboard = props => {
	return (
		<div
			role="region"
			aria-label="Dashboard for game configuration"
			className="bottomInnerContainer"
		>
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
			<div>
				<ClearLocalStorageButton />
			</div>
		</div>
	);
};

export default Dashboard;
