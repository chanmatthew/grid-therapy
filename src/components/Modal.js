import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import { createPortal } from "react-dom";

const ModalBackdrop = styled.div`
  background-color: ${props =>
    props.opened ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 1s ease;
  pointer-events: ${props => (props.opened ? "auto" : "none")};
`;

const ModalBody = styled.div`
  background-color: rgba(250, 238, 216, 1);
  border-radius: 5px;
  min-width: 700px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transform: ${props =>
    props.opened ? "translate3d(0, 0, 0)" : "translate3d(0, 100px, 0)"};
  opacity: ${props => (props.opened ? "1" : "0")};
  transition: transform 0.8s ease, opacity 0.8s ease;
`;

const Title = styled.p`
  font-size: 3rem;
  letter-spacing: 0.04em;
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.2);
  background-color: rgba(200, 189, 171, 1);
  padding: 1.5em 1em 0.5em 1em;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const ResultsIcon = styled.div`
  background-image: ${props => `url(${props.src})` || "none"};
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: contain;
  height: 1.5em;
  width: 1.5em;
  margin-right: 0.1em;
`;

const Results = styled.div`
  width: 100%;
`;

const Level = styled.div`
  text-transform: uppercase;
  padding: 0 3em;
  background-color: ${props =>
    props.even ? "transparent" : "rgba(200, 189, 171, 0.15)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LevelSpan = styled.span`
  font-size: 2rem;
  letter-spacing: 0.04em;
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(200, 189, 171, 1);
  padding: 1em 0;
`;

const RestartButton = styled.button`
  background-color: rgba(200, 189, 171, 0.5);
  color: #a09789;
  padding: 0.5em 0;
  width: calc(100% - 3em);
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 800;
  border-radius: 5px;
  font-size: 2rem;
  letter-spacing: 0.04em;
  margin: 1em 0;

  &:hover {
    background-color: rgba(200, 189, 171, 0.8);
  }
`;

const RestartGraphic = styled.div`
  background-image: ${props => `url(${props.src})` || "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 1.2em;
  width: 1.2em;
  margin-right: 0.3em;
  margin-top: -0.2em;
`;

const AttemptsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const AttemptWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin-left: 0.6em;
`;

const Attempt = styled.div`
  position: absolute;
  width: 10px;
  height: 45px;
  background-color: #ff6f6f;
  transform: rotate3d(0, 0, 1, 45deg);
  border-radius: 0.125em;
  transition: all 0.2s ease;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 45px;
    background-color: #ff6f6f;
    transform: rotate3d(0, 0, 1, 90deg);
    border-radius: 0.125em;
    transition: all 0.2s ease;
  }
`;

const Checkmark = styled.div`
  position: absolute;
  width: 10px;
  height: 40px;
  background-color: #96d796;
  transform: rotate3d(0, 0, 1, 35deg);
  border-radius: 0.125em;
  transition: all 0.2s ease;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-left: 1.4em;

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 10px;
    background-color: #96d796;
    border-radius: 0.125em;
    transition: all 0.2s ease;
    bottom: 0;
    right: 0;
  }
`;

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  el = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { levels, restart, opened } = this.props;

    return createPortal(
      <ModalBackdrop opened={opened}>
        <ModalBody opened={opened}>
          <Title>
            <ResultsIcon src="/graphics/results.svg" />
            Results
          </Title>
          <Results>
            {Object.keys(levels).map(level => (
              <Level key={level} even={level % 2 === 0}>
                <LevelSpan>Level {parseInt(level) + 1}</LevelSpan>
                <AttemptsContainer>
                  {Object.keys(levels[level].stages).map(stage => (
                    <AttemptWrapper key={stage}>
                      {levels[level].stages[stage] === "passed" ? (
                        <Checkmark />
                      ) : (
                        <Attempt />
                      )}
                    </AttemptWrapper>
                  ))}
                </AttemptsContainer>
              </Level>
            ))}
          </Results>
          <RestartButton type="button" onClick={restart}>
            <RestartGraphic src="/graphics/restart.svg" />
            Start Again
          </RestartButton>
        </ModalBody>
      </ModalBackdrop>,
      this.el
    );
  }
}

export default Modal;
