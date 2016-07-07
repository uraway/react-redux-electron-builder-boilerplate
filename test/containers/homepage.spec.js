import HomepageComponent from "components/homepage";
import HomepageContainer from "containers/homepage";

describe("HomepageContainer", () => {
  const element = shallow(<HomepageContainer />);

  it("renders the homepage component", () => {
    expect(element.type()).to.eq(HomepageComponent);
  });
});
