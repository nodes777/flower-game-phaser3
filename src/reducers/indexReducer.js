import { combineReducers } from "redux";
import { flowersReducer as flowers } from "./flowersReducer";
import { punnettReducer as punnett } from "./punnettReducer";
import { beesReducer as bees } from "./beesReducer";
const indexReducer = combineReducers({
	flowers,
	punnett,
	bees
});

export default indexReducer;
