import React, { Component } from "react";
// component
import Button from "../Button/button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = e => {
    e.preventDefault();

    const response = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).catch(error => console.log("Error", error));

    this.refs.userId.value = null;
    this.refs.title.value = null;
    this.refs.body.value = null;
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <form className="form-wrapper" onSubmit={this.submitForm}>
        <label>User Id:</label>
        <input
          type="text"
          name="userId"
          ref="userId"
          value={userId}
          onChange={this.handleChange}
        />
        <label>Title:</label>
        <input
          type="text"
          name="title"
          ref="title"
          value={title}
          onChange={this.handleChange}
        />
        <label>Body:</label>
        <input
          type="text"
          name="body"
          ref="body"
          value={body}
          onChange={this.handleChange}
        />
        <div className="form-btn">
          <Button className="tertiary-menu" type="submit" name="Submit" />
          <Button
            className="tertiary-menu"
            type="reset"
            name="Cancel"
            onClick={this.props.handleCancel}
          />
        </div>
      </form>
    );
  }
}

export default Form;
