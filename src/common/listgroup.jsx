import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const {
      listGroup,
      onItemSelect,
      textProperty,
      valueProperty,
      selectedItem
    } = this.props;
    return (
      <ul className="list-group">
        {listGroup.map(item => (
          <li
            key={item[valueProperty]}
            className={
              selectedItem === item
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
