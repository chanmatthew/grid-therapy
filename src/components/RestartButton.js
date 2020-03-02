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
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const Button = styled.div`
  position: absolute;
  background-color: rgba(250, 238, 216, 1);
  top: 0;
  right: 1em;
  height: ${props => (props.hovered ? "0.2em" : "0em")};
  width: 1.75em;
  transition: all 0.2s ease;
  opacity: ${props => (props.hovered ? "1" : "0.5")};
  user-select: none;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    right: 1em;
    height: ${props => props.hovered && "0.25em"};
    width: 2em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    right: 1em;
    height: ${props => props.hovered && "0.25em"};
    width: 2.5em;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    right: 1em;
    height: ${props => props.hovered && "0.5em"};
    width: 2.5em;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    right: 1.2em;
    height: ${props => props.hovered && "0.5em"};
    width: 2.75em;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    right: 1.8em;
    height: ${props => props.hovered && "0.5em"};
    width: 2.75em;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    right: 1.9em;
    height: ${props => props.hovered && "0.75em"};
    width: 3em;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    right: 1.9em;
    height: ${props => props.hovered && "0.75em"};
    width: 3.5em;
  }

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    background-image: ${props => `url(${props.src})`};
    background-position: 50% 65%;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    height: 2.25em;
    width: 100%;
    user-select: none;
    position: absolute;
    background-color: rgba(250, 238, 216, 1);
    border-bottom-left-radius: 2.4em;
    border-bottom-right-radius: 2.4em;
    top: 100%;

    @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
      background-position: 50% 66%;
      height: 2.5em;
    }

    @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
      background-position: 50% 60%;
      height: 3em;
    }

    @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
      background-position: 50% 55%;
      height: 3em;
    }

    @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
      background-position: 50% 65%;
      height: 3.5em;
    }

    @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
      background-position: 50% 60%;
      height: 3.5em;
    }

    @media only screen and (min-width: ${DESKTOP_UP}px) {
      background-position: 50% 60%;
      height: 3.75em;
    }
  }
`;

class Modal extends Component {
  state = {
    hovered: false
  };

  render() {
    const { hovered } = this.state;
    const { handler } = this.props;

    return (
      <Button
        src={`${process.env.PUBLIC_URL}/graphics/restart.svg`}
        onClick={handler}
        onTouchStart={e => {
          e.preventDefault();
          this.setState({ hovered: true });
        }}
        onTouchEnd={e => {
          e.preventDefault();
          this.setState({ hovered: false }, handler);
        }}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        hovered={hovered}
      />
    );
  }
}

export default Modal;
