import React, { Fragment, useState } from "react";
// component
import Button from "../Button/button";
import Form from "../Form/form";

const LinkedMenu = ({ subMenu, handleCancel }) => {
  const [tertiaryMenuToggle, setTertiaryMenuToggle] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  const toggleTertiary = () => {
    setTertiaryMenuToggle(!tertiaryMenuToggle);
  };

  const formToggle = () => {
    setToggleForm(!toggleForm);
  };

  const edit = editIndex => {
    setEditIndex(editIndex);
  };

  const showNestedMenu = item => {
    const { id, name, subMenu, hasForm } = item;

    if (!subMenu) {
      return (
        <Fragment>
          <Button
            type="button"
            className="tertiary-menu"
            key={id}
            name={name}
            onClick={formToggle}
          />
          {hasForm && toggleForm && <Form handleCancel={formToggle} />}
          {!hasForm && toggleForm && (
            <h1>This functionality hasn't been implemented yet!!</h1>
          )}
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Button
            type="button"
            className="tertiary-menu"
            key={id}
            name={name}
            onClick={toggleTertiary}
          />
          <div className="toggle-option ">
            {subMenu &&
              tertiaryMenuToggle &&
              subMenu.map(item => (
                <Button
                  type="button"
                  className="tertiary-menu"
                  key={item.id}
                  name={item.name}
                />
              ))}
          </div>
        </Fragment>
      );
    }
  };

  return <div className="toggle-option">{showNestedMenu(subMenu)}</div>;
};

export default LinkedMenu;
