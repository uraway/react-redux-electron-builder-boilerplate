import ApplicationContainer from "containers/application";

describe("ApplicationContainer", () => {
  const child   = <div className="unique" />,
        element = shallow(<ApplicationContainer>{child}</ApplicationContainer>);

  it("renders children provided", () => {
    expect(element.contains(child)).to.equal(true);
  });
});
