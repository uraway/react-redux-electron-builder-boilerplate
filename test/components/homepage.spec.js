import HomepageComponent from "components/homepage";

describe("HomepageComponent", () => {
  const element = shallow(<HomepageComponent />);

  it("renders as a <div> element", () => {
    expect(element.type()).to.eq("div");
  });
});
