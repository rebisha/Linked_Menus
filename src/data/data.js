const DATA = [
  {
    id: 1,
    name: "Menu 1",
    hasForm: false
  },
  {
    id: 2,
    name: "Menu 2",
    hasForm: false
  },
  {
    id: 3,
    name: "Menu 3",
    hasForm: true
  },
  {
    id: 4,
    name: "Menu 4",
    hasForm: false
  },
  {
    id: 5,
    name: "Menu 5",
    hasForm: false,
    subMenu: [
      {
        id: 6,
        name: "Submenu 1",
        hasForm: false
      },
      {
        id: 7,
        name: "Submenu 2",
        hasForm: false,
        subMenu: [
          {
            id: "t-1",
            name: "Tertiary Menu 1"
          },
          {
            id: "t-2",
            name: "Tertiary Menu 2"
          },
          {
            id: "t-3",
            name: "Tertiary Menu 3"
          }
        ]
      },
      {
        id: 8,
        name: "Submenu 3",
        hasForm: true
      },
      {
        id: 9,
        name: "Submenu 4",
        hasForm: true
      }
    ]
  },
  {
    id: 10,
    name: "Menu 6",
    hasForm: false,
    subMenu: [
      {
        id: 11,
        name: "Submenu 1",
        hasForm: false
      },
      {
        id: 12,
        name: "Submenu 2",
        hasForm: false
      },
      {
        id: 13,
        name: "Submenu 3",
        hasForm: false
      },
      {
        id: 4,
        name: "Submenu 4",
        hasForm: false
      }
    ]
  }
];

export default DATA;
