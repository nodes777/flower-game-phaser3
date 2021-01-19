import React from "react";
import NewFlowerFromPunnettButton from "./NewFlowerFromPunnettButton";
import NewRandomFlowerButton from "./NewRandomFlowerButton";
import BeeCanFlyButton from "./BeeCanFlyButton";
import RemoveRecessiveAllele from "./RemoveRecessiveAllele";
import AddRecessiveAllele from "./AddRecessiveAllele";
import SaveToLocalStorageButton from "./SaveToLocalStorageButton";
import ClearLocalStorageButton from "./ClearLocalStorageButton";
import "../../css/App.css";

const Dashboard = (props) => {
	return (
		<div
			role="region"
			aria-label="Options for game configuration"
			className="bottomInnerContainer"
		>
			<h1>Options</h1>
			{/* <div>
				<BeeCanFlyButton />
			</div> */}
			<div>
				<NewFlowerFromPunnettButton />

				<NewRandomFlowerButton />
			</div>
			<div>
				<AddRecessiveAllele alleleType="color" />

				<RemoveRecessiveAllele alleleType="color" />

				<AddRecessiveAllele alleleType="shape" />

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
