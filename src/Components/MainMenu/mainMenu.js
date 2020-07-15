import React, { useState, Fragment } from "react";
// components
import Button from "../Button/button";
import Form from "../Form/form";
import LinkedMenu from "../LinkedMenu/linkedMenu";

const MainMenu = ({ item }) => {
  const { id, name, hasForm, subMenu } = item;

  const [formToggle, setFormToggle] = useState(false);
  const [headingToggle, setHeadingToggle] = useState(false);
  const [subMenuToggle, setSubMenuToggle] = useState(false);

  const handleClick = e => {
    setFormToggle(hasForm);
    setHeadingToggle(!headingToggle);
    setSubMenuToggle(!subMenuToggle);
  };

  const handleCancel = e => {
    setFormToggle(!formToggle);
  };

  return (
    <Fragment>
      <Button
        type="button"
        className="sub-menu-item"
        name={name}
        onClick={handleClick}
      />

      {formToggle && <Form handleCancel={handleCancel} />}
      {headingToggle && !hasForm && !subMenu && (
        <h1>This functionality hasn't been implemented yet!!</h1>
      )}
      {subMenu &&
        subMenuToggle &&
        subMenu.map(
          item =>
            item && (
              <LinkedMenu
                key={item.id}
                subMenu={item}
                formToggle={formToggle}
                headingToggle={headingToggle}
                handleCancel={handleCancel}
              />
            )
        )}
    </Fragment>
  );
};

export default MainMenu;
