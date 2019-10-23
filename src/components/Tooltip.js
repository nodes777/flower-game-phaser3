import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { screenSize } from "../utils/screenSize";
import "../css/App.css";

class Tooltip extends React.Component {
  static propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="innerSideWings">{this.props.content}</div>;
  }
}
function mapStateToProps({ config }) {
  return config.tooltip;
}
export default connect(mapStateToProps)(Tooltip);
