import App from "./App";
import React from "react";
import renderer from "react-test-renderer";
import delay from "redux-saga";

/* test in process */

describe("The application title", () => {
  it("should render title", () => {
    const tree = renderer.create.apply(<App />)
    //const jsonTree = tree.toJSON()
    console.log(tree.root)
    //await delay();
    //const instance = tree.root;
    //const component = instance.findByProps({ className: "title" });
   // const text = component.children[0];
   // expect(text).toEqual("Больничное отделение");
  });
});
