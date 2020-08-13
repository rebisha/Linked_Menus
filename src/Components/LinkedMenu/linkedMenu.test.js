import React from "react";
import LinkedMenu from "./linkedMenu";
import renderer from "react-test-renderer";

const subMenu = [
  {
    name: "Example 1",
    hasForm: false,
    id: "examplekey0"
  },
  {
    name: "Example 2",
    hasForm: false,
    id: "examplekey1"
  },
  {
    name: "Example 3",
    hasForm: true,
    id: "examplekey2",
    subMenu: [
      {
        id: 1,
        name: "SubMenu 1"
      },
      {
        id: 1,
        name: "SubMenu 1"
      }
    ]
  }
];

test("LinkedMenu component renders correctly", () => {
  const component = renderer.create(
    <LinkedMenu handleCancel={() => !subMenuToggle} subMenu={subMenu} />
  );
  expect(component).toMatchSnapshot();
});
