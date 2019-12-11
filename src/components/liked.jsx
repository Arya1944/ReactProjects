import React, { Component } from "react";

class Liked extends Component {
  //state = { oldCalss: "fa fa-heart-o" };
  //onClick={() => this.getShape(this.props.liked)}

  getIcon(liked) {
    const cName = "fa fa-heart";

    return liked === true ? cName : cName + "-o";
  }

  render() {
    return (
      <i
        className={this.getIcon(this.props.liked)}
        onClick={this.props.onClick}
      />
    );
  }
}

export default Liked;
