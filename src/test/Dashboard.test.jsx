import "./setupTest";
import Dashboard from "../pages/Dashboard";
import { shallow } from "enzyme";

describe("tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render initial layout", () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it("has a app bar with menu", () => {
    expect(wrapper.find(".dashboard-app-bar")).toBeTruthy();
  });

  it("has a div containing search tab", () => {
    expect(wrapper.find(".dashboard-search-div")).toBeTruthy();
  });

  it("has a div containing search button", () => {
    expect(wrapper.find(".dashboard-search-button")).toBeTruthy();
  });

  it("contain a child component to display the map with selected location", () => {
    expect(wrapper.find(".dashboard-location-div")).toBeTruthy();
  });

  it("contain a div to represent the sugesstions", () => {
    expect(wrapper.find(".dashboard-input")).toBeTruthy();
  });
});
