// global modules
import React, { Component } from "react";
// components
import Button from "./Components/Button/button";
import MainMenu from "./Components/MainMenu/mainMenu";
// modules
import DATA from "./data/data";
// styles
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false
    };
  }

  handleClick = e => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };

  render() {
    return (
      <div className="main-menu">
        <Button
          type="button"
          name="Menu"
          className="main-menu-item"
          onClick={this.handleClick}
        />
        <div className="sub-menu">
          {this.state.isToggleOn
            ? DATA.map(item => <MainMenu key={item.id} item={item} />)
            : ""}
        </div>
      </div>
    );
  }
}

export default App;
