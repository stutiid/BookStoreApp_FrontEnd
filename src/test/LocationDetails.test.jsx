import "./setupTest";
import LocationDetails from "../pages/LocationDetails";
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
    wrapper = shallow(<LocationDetails data={data} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render initial layout", () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it("has a div containing icon and name of location", () => {
    expect(wrapper.find(".location-main")).toBeTruthy();
  });

  it("has a card to display other details about the location", () => {
    expect(wrapper.find(".location-card")).toBeTruthy();
  });
});
