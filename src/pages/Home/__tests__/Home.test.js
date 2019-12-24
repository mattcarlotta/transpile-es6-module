import Home from "../index.js";

const wrapper = shallow(<Home />);

describe("Home", () => {
	it("renders without errors", () => {
		expect(wrapper.find(".container").exists()).toBeTruthy();
	});
});
