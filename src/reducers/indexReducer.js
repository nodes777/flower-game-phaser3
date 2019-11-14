import { combineReducers } from "redux";
import { flowersReducer as flowers } from "./flowersReducer";
import { beesReducer as bees } from "./beesReducer";
import { configReducer as config } from "./configReducer";
import { tilesReducer as tiles } from "./tilesReducer";
const indexReducer = combineReducers({
	flowers,
	bees,
	config,
	tiles
});

export default indexReducer;
