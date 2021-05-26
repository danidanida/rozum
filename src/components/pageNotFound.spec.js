import React from "react";
import PageNotFound from "./PageNotFound";
import renderer from "react-test-renderer";

describe("The 404 page", () => {
  it("renders a page", () => {
    const tree = renderer.create(<PageNotFound tags={["css", "html", "go"]} />);
    expect(tree).toMatchSnapshot();
  });
});
