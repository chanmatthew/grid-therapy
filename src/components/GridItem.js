import React, { Component } from "react";
import styled from "@emotion/styled/macro";

const GridItemDiv = styled.div`
  position: relative;
  border: ${props =>
    props.hovered
      ? "12px solid rgba(200, 189, 171, 1)"
      : "8px solid rgba(200, 189, 171, 1)"};
  background-color: ${props =>
    props.hovered ? "rgba(200, 189, 171, 0.4)" : "rgba(200, 189, 171, 0.2)"};
  margin-left: -8px;
  margin-bottom: -8px;
  transition: all 0.2s ease;
  border-top-left-radius: ${props =>
    props.firstrow && props.firstcolumn ? "5px" : "0"};
  border-top-right-radius: ${props =>
    props.firstrow && props.lastcolumn ? "5px" : "0"};
  border-bottom-left-radius: ${props =>
    props.lastrow && props.firstcolumn ? "5px" : "0"};
  border-bottom-right-radius: ${props =>
    props.lastrow && props.lastcolumn ? "5px" : "0"};
  touch-action: none;

  &:hover {
    cursor: pointer;
  }
`;

class GridItem extends Component {
  state = {
    hovered: false
  };

  render() {
    const {
      firstrow,
      lastrow,
      firstcolumn,
      lastcolumn,
      handleItemClick,
      children
    } = this.props;
    const { hovered } = this.state;

    return (
      <GridItemDiv
        firstrow={firstrow}
        lastrow={lastrow}
        firstcolumn={firstcolumn}
        lastcolumn={lastcolumn}
        onClick={handleItemClick}
        onTouchStart={e => {
          e.preventDefault();
          this.setState({ hovered: true });
        }}
        onTouchEnd={e => {
          e.preventDefault();
          this.setState({ hovered: false }, handleItemClick);
        }}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        hovered={hovered}
      >
        {children}
      </GridItemDiv>
    );
  }
}

export default GridItem;
