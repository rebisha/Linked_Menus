import React from "react";
import Form from "./form";
import renderer from "react-test-renderer";

test("Form component renders correctly", () => {
  const component = renderer.create(
    <Form handleSubmit={() => console.log("Submit form")} />
  );
  expect(component).toMatchSnapshot();
});
