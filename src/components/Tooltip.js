import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { screenSize } from "../utils/screenSize";
class Tooltip extends React.Component {
  static propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  };

  styles = {
    wrapper: {
      position: "relative",
      display: "inline-block",
      zIndex: "98",
      color: "#555",
      cursor: "help"
    },
    content: {
      background: "#000",
      color: "#fff",
      display: "inline",
      fontSize: ".8em",
      padding: ".3em 1em"
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { styles } = this;

    return (
      <div
        ref="wrapper"
        style={styles.wrapper}
        role="tooltip"
        aria-label="Tooltip for flower names"
      >
        {this.props.visible && (
          <div
            ref="tooltip"
            style={{
              position: "absolute",
              zIndex: "99",
              minWidth: "80px",
              maxWidth: "420px",
              background: "#000",
              top: `${this.props.posY - screenSize.height - 50}px`,
              left: `${this.props.posX}px`,
              marginBottom: "10px",
              padding: "5px",
              WebkitTransform: "translateX(-50%)",
              msTransform: "translateX(-50%)",
              OTransform: "translateX(-50%)",
              transform: "translateX(-50%)"
            }}
          >
            <div ref="content" style={styles.content}>
              {this.props.content}
            </div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps({ config }) {
  return config.tooltip;
}
export default connect(mapStateToProps)(Tooltip);
