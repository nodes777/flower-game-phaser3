import { combineReducers } from "redux";
import { flowersReducer as flowers } from "./flowersReducer";
import { punnettReducer as punnett } from "./punnettReducer";
import { beesReducer as bees } from "./beesReducer";
import { configReducer as config } from "./configReducer";
const indexReducer = combineReducers({
	flowers,
	punnett,
	bees,
	config
});

export default indexReducer;
