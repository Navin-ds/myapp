import { Component } from "react";

import "./index.css";

class Universities extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>your universities</h1>
          <input type="search" />
          <link to="/universities"></link>
        </div>
      </div>
    );
  }
}

export default Universities;
