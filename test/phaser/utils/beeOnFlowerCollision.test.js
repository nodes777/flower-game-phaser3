import {
	ADD_FLOWER,
	PICKUP_POLLEN,
	DROP_POLLEN
} from "../../../src/types/actions";
import * as actionCreators from "../../../src/actions/indexActions";
import { checkForPollen } from "../../../src/phaser/utils/beeOnFlowerCollision";
import { exampleState } from "../../../src/exampleState";

/* It looks like you can't test what happens inside the function.
/  Since the store is called inside beeOnFlowerCollision, I don't think there's anything I can test here
/ This may reflect a design flaw, where I should be passing in the store to the function, instead of
/ calling it in the function
*/

describe.skip("checkForPollen", () => {
	it("Should recieve a beeId and a flowerId", () => {});
	it("Should call store.dispatch(pickupPollen) if the bee doesnt have any pollen", () => {
		const pickupPollenSpy = jest.spyOn(actionCreators, "pickupPollen");
		checkForPollen("bee1", "flower1");
		expect(pickupPollenSpy).toHaveBeenCalled();
	});
	it("Should not call store.dispatch(addFlower) if the bee doesnt have any pollen", () => {
		actionCreators[actionCreators.dropPollen] = jest.fn();
		//const addFlowerSpy = jest.spyOn(actionCreators, "dropPollen").mockImplementation()
		const addFlowerSpy = jest.spyOn(actionCreators, "dropPollen");
		checkForPollen("bee1", "flower1");
		expect(addFlowerSpy).toHaveBeenCalledTimes(1);
		expect(addFlowerSpy).toHaveBeenCalledTimes(2);
	});
	it("Should call store.dispatch(dropPollen) if the bee already has pollen", () => {});
	it("Should call store.dispatch(addFlower) if the bee already has pollen AND there is room", () => {});
});
