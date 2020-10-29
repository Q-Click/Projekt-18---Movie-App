import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <h1>Filmopedia</h1>
          <p>
            Welcome to the world's best movie library. This app is using the
            MovieDB database to render data and movie information.
          </p>
        </div>
      </Fragment>
    );
  }
}
export default Header;
