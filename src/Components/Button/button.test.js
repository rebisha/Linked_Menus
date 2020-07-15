import React from "react";
import Button from "./button";
import renderer from "react-test-renderer";

const handleClick = () => {
  console.log("I'm clicked");
};

test("Button component renders correctly", () => {
  const component = renderer.create(
    <Button onClick={handleClick}>Button</Button>
  );
  expect(component).toMatchSnapshot();
});
