import React from "react";
// shallow prevents rendering of sub components????
import { shallow, mount, render } from "enzyme";
import App from "../src/App";

describe.skip("<App />", () => {
	const app = render(<App />);
	it("Should render ", () => {
		expect(app).toMatchSnapShot();
	});
	it("Should have <Punnett/> <Dashboard/> and <FlowerTable />", () => {
		expect(app.find("<Punnett />")).toBeTruthy();
		expect(app.find("<Dashboard/>")).toBeTruthy();
		expect(app.find("<FlowerTable />")).toBeTruthy();
	});
	it("Should NOT have <fdgdfgt/> <sdsfdg/> and <fgggggg />", () => {
		expect(app.find("<fdgdfgt />")).toBeFalsey();
		expect(app.find("<sdsfdg/>")).toBeFalsey();
		expect(app.find("<fgggggg />")).toBeFalsey();
	});
});

// describe('A suite', function() {
//   it('should render without throwing an error', function() {
//     expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
//   });

//   it('should be selectable by class "foo"', function() {
//     expect(shallow(<Foo />).is('.foo')).toBe(true);
//   });

//   it('should mount in a full DOM', function() {
//     expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
// });
