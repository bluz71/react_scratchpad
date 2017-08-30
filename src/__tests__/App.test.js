import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import "jest-enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Welcome", () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  expect(wrapper).toContainReact(welcome);
});
