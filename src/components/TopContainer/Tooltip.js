import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/App.css";

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.content}</div>;
  }
}
function mapStateToProps({ config }) {
  return config.tooltip;
}
export default connect(mapStateToProps)(Tooltip);
