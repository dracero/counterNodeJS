// Counter.js

import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cotainer">
        <div className="notification">
          <h1>{this.props.counting}</h1>
          <h1>{this.props.iding}</h1>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counting: state.counterReducer,
    iding: state.idReducer
  };
}
export default connect(mapStateToProps)(Counter);
