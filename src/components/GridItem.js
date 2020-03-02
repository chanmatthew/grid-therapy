import React, { Component } from "react";
import styled from "@emotion/styled/macro";

import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  ,
  SMALL_DEVICES_LANDSCAPE_UP,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP
] = MIN_WIDTH_BREAKPOINTS;

const GridItemDiv = styled.div`
  font-size: 0.25rem;
  position: relative;
  border: ${props =>
    props.hovered
      ? "0.75em solid rgba(200, 189, 171, 1)"
      : "0.5em solid rgba(200, 189, 171, 1)"};
  background-color: ${props =>
    props.hovered ? "rgba(200, 189, 171, 0.4)" : "rgba(200, 189, 171, 0.2)"};
  margin-left: -0.5em;
  margin-bottom: -0.5em;
  transition: all 0.2s ease;
  border-top-left-radius: ${props =>
    props.firstrow && props.firstcolumn ? "0.3125em" : "0"};
  border-top-right-radius: ${props =>
    props.firstrow && props.lastcolumn ? "0.3125em" : "0"};
  border-bottom-left-radius: ${props =>
    props.lastrow && props.firstcolumn ? "0.3125em" : "0"};
  border-bottom-right-radius: ${props =>
    props.lastrow && props.lastcolumn ? "0.3125em" : "0"};
  touch-action: none;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 0.3125rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 0.375rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 0.4375rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 0.5rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 0.5625rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 0.625rem;
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
