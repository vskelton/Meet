// src/components/Alert.jsx

import { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  class InfoAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'rgb(0, 0, 225)';
      this.bgColor = 'rgb(220, 220, 255)';
    }
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px"
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}