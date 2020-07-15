import React from "react";
import MainMenu from "./mainMenu";
import renderer from "react-test-renderer";

const item = [
  {
    name: "Example 1",
    hasForm: false,
    id: 0
  },
  {
    name: "Example 2",
    hasForm: false,
    id: 1
  },
  {
    name: "Example 3",
    hasForm: true,
    id: 2,
    subMenu: [
      {
        id: 3,
        name: "SubMenu 1",
        hasForm: false
      },
      {
        id: 4,
        name: "SubMenu 1",
        hasForm: false
      }
    ]
  }
];

test("MainMenu component renders correctly", () => {
  const component = renderer.create(<MainMenu item={item} />);
  expect(component).toMatchSnapshot();
});
