import "./setupTest";
import DisplayLocation from "../pages/DisplayLocation";
import { shallow } from "enzyme";

const data = {
  id: 1,
  name: "Banglore",
  latitude: "12.9699",
  longitude: "77.5980",
  description:
    "Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state.",
  state: "Karnataka",
  population: 13707000,
};

describe("tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DisplayLocation data={data} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render initial layout", () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it("has a component to render the map", () => {
    expect(wrapper.find(".display-map")).toBeTruthy();
  });
});
