import { combineReducers } from "redux";
import { flowersReducer as flowers } from "./flowersReducer";
import { punnettReducer as punnett } from "./punnettReducer";
import { beesReducer as bees } from "./beesReducer";
import { configReducer as config } from "./configReducer";
import { tilesReducer as tiles } from "./tilesReducer";
const indexReducer = combineReducers({
	flowers,
	punnett,
	bees,
	config,
	tiles
});

export default indexReducer;
