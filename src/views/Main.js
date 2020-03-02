import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import { Helmet } from "react-helmet";

import GridItem from "../components/GridItem";
import Modal from "../components/Modal";
import RestartButton from "../components/RestartButton";
import { MIN_WIDTH_BREAKPOINTS } from "../enums";

const [
  ,
  ,
  POST_IPHONE6_PORTRAIT_UP,
  POST_IPHONE6_PLUS_PORTRAIT_UP,
  PHONE_LANDSCAPE_UP,
  SMALL_DEVICES_LANDSCAPE_UP,
  BETWEEN_SMALL_DEVICES_TABLET_UP,
  TABLET_PORTRAIT_UP,
  TABLET_LANDSCAPE_UP,
  DESKTOP_UP
] = MIN_WIDTH_BREAKPOINTS;

const description =
  "An application that accesses a person's ability to recognize a moving target.";

const Parent = styled.div`
  position: relative;
  user-select: none;
`;

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 26vh;
  min-height: 8em;
  background-color: rgba(200, 189, 171, 1);

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    min-height: 10em;
  }
`;

const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LevelTitle = styled.span`
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.75rem;
  }
`;

const Level = styled.div`
  font-size: 0.4rem;
  height: 6.25em;
  width: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 0.45rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 0.5rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 0.6rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 0.8rem;
    margin-top: 20px;
  }
`;

const LevelSpan = styled.span`
  font-size: 2rem;
  letter-spacing: 0.0175em;
  font-weight: 800;
  color: rgba(250, 238, 216, 1);

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 4rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 4.5rem;
  }
`;

const StageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StagesTitle = styled.span`
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 1.75rem;
  }
`;

const AttemptsContainer = styled.div`
  display: flex;
  margin-top: 15px;

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    margin-top: 20px;
  }
`;

const Stage = styled.div`
  font-size: 0.4rem;
  background-color: rgba(0, 0, 0, 0.1);
  height: 6.25em;
  width: 5em;
  border-radius: 0.3125em;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 1.25em;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 0.45rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 0.5rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 0.5rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 0.6rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 0.8rem;
  }
`;

const Attempt = styled.div`
  font-size: 0.4rem;
  position: relative;
  width: 0.9375em;
  height: 4.21875em;
  background-color: #ff6f6f;
  transform: rotate3d(0, 0, 1, 45deg);
  border-radius: 0.125em;
  transition: all 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    width: 0.9375em;
    height: 4.21875em;
    background-color: #ff6f6f;
    transform: rotate3d(0, 0, 1, 90deg);
    border-radius: 0.125em;
    transition: all 0.2s ease;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 0.45rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 0.5rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 0.6rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 0.7rem;
  }
`;

const Checkmark = styled.div`
  font-size: 0.4rem;
  position: relative;
  width: 0.9375em;
  height: 3.75em;
  background-color: #96d796;
  transform: rotate3d(0, 0, 1, 35deg);
  border-radius: 0.125em;
  transition: all 0.2s ease;
  margin-left: 1em;

  &::after {
    content: "";
    position: absolute;
    width: 1.875em;
    height: 0.9375em;
    background-color: #96d796;
    border-radius: 0.125em;
    transition: all 0.2s ease;
    bottom: 0;
    right: 0;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 0.45rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 0.5rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 0.6rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 0.7rem;
  }
`;

const Grid = styled.div`
  font-size: 0.35rem;
  display: grid;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 45em;
  height: calc(${props => props.viewportHeight}px - 26vh);
  justify-content: center;
  align-content: center;
  grid-template: repeat(${props => props.rows}, 5.625em) / repeat(
      ${props => props.columns},
      5.625em
    );
  user-select: none;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 0.4rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 0.45rem;
  }

  @media only screen and (min-width: ${PHONE_LANDSCAPE_UP}px) {
    font-size: 0.5rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 0.55rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 0.6rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 0.65rem;
    height: calc(${props => props.viewportHeight}px - 28vh);
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 0.7rem;
    height: calc(${props => props.viewportHeight}px - 26vh);
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 0.9rem;
  }
`;

const Target = styled.div`
  font-size: 0.4rem;
  position: absolute;
  height: 3.125em;
  width: 3.125em;
  background-color: rgba(200, 189, 171, 1);
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @media only screen and (min-width: ${POST_IPHONE6_PORTRAIT_UP}px) {
    font-size: 0.45rem;
  }

  @media only screen and (min-width: ${POST_IPHONE6_PLUS_PORTRAIT_UP}px) {
    font-size: 0.55rem;
  }

  @media only screen and (min-width: ${SMALL_DEVICES_LANDSCAPE_UP}px) {
    font-size: 0.6rem;
  }

  @media only screen and (min-width: ${BETWEEN_SMALL_DEVICES_TABLET_UP}px) {
    font-size: 0.65rem;
  }

  @media only screen and (min-width: ${TABLET_PORTRAIT_UP}px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: ${TABLET_LANDSCAPE_UP}px) {
    font-size: 0.75rem;
  }

  @media only screen and (min-width: ${DESKTOP_UP}px) {
    font-size: 0.95rem;
  }
`;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Main extends Component {
  state = {
    viewportHeight: 0,
    currentLevel: 0,
    levels: {
      0: {
        rows: 3,
        columns: 3,
        currentStage: 0,
        stages: {
          0: "unknown",
          1: "unknown",
          2: "unknown",
          3: "unknown",
          4: "unknown"
        }
      },
      1: {
        rows: 4,
        columns: 6,
        currentStage: 0,
        stages: {
          0: "unknown",
          1: "unknown",
          2: "unknown",
          3: "unknown",
          4: "unknown"
        }
      },
      2: {
        rows: 5,
        columns: 9,
        currentStage: 0,
        stages: {
          0: "unknown",
          1: "unknown",
          2: "unknown",
          3: "unknown",
          4: "unknown"
        }
      },
      3: {
        rows: 7,
        columns: 9,
        currentStage: 0,
        stages: {
          0: "unknown",
          1: "unknown",
          2: "unknown",
          3: "unknown",
          4: "unknown"
        }
      }
    },
    target: null,
    isModalShown: false
  };

  componentDidMount() {
    this.setState({
      viewportHeight: window.innerHeight,
      target: getRandomInt(this.getTotalItems(0))
    });

    window.addEventListener("resize", this.setViewportHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setViewportHeight);
  }

  setViewportHeight = () => {
    this.setState({ viewportHeight: window.innerHeight });
  };

  getTotalItems = level => {
    const { levels } = this.state;

    return levels[level].rows * levels[level].columns;
  };

  handleItemClick = index => {
    this.setState(({ currentLevel, levels, target }) => ({
      currentLevel:
        currentLevel !== Object.keys(levels).length - 1 &&
        levels[currentLevel].currentStage ===
          Object.keys(levels[currentLevel].stages).length - 1
          ? currentLevel + 1
          : currentLevel,
      levels: {
        ...levels,
        [currentLevel]: {
          ...levels[currentLevel],
          currentStage: levels[currentLevel].currentStage + 1,
          stages: {
            ...levels[currentLevel].stages,
            [levels[currentLevel].currentStage]:
              target === index ? "passed" : "failed"
          }
        }
      },
      target:
        currentLevel === Object.keys(levels).length - 1 &&
        levels[currentLevel].currentStage ===
          Object.keys(levels[currentLevel].stages).length - 1
          ? target
          : getRandomInt(this.getTotalItems(currentLevel)),
      isModalShown:
        currentLevel === Object.keys(levels).length - 1 &&
        levels[currentLevel].currentStage ===
          Object.keys(levels[currentLevel].stages).length - 1
          ? true
          : false
    }));
  };

  resetGrid = () => {
    this.setState({
      currentLevel: 0,
      levels: {
        0: {
          rows: 3,
          columns: 3,
          currentStage: 0,
          stages: {
            0: "unknown",
            1: "unknown",
            2: "unknown",
            3: "unknown",
            4: "unknown"
          }
        },
        1: {
          rows: 4,
          columns: 6,
          currentStage: 0,
          stages: {
            0: "unknown",
            1: "unknown",
            2: "unknown",
            3: "unknown",
            4: "unknown"
          }
        },
        2: {
          rows: 5,
          columns: 9,
          currentStage: 0,
          stages: {
            0: "unknown",
            1: "unknown",
            2: "unknown",
            3: "unknown",
            4: "unknown"
          }
        },
        3: {
          rows: 7,
          columns: 9,
          currentStage: 0,
          stages: {
            0: "unknown",
            1: "unknown",
            2: "unknown",
            3: "unknown",
            4: "unknown"
          }
        }
      },
      target: getRandomInt(this.getTotalItems(0)),
      isModalShown: false
    });
  };

  showModal = () => {
    this.setState({ isModalShown: true });
  };

  render() {
    const {
      viewportHeight,
      currentLevel,
      levels,
      target,
      isModalShown
    } = this.state;

    let items = [];

    for (let i = 0; i < levels[currentLevel].rows; i++) {
      for (let j = 0; j < levels[currentLevel].columns; j++) {
        items.push(
          <GridItem
            key={j * levels[currentLevel].rows + i}
            firstrow={i === 0}
            lastrow={i === levels[currentLevel].rows - 1}
            firstcolumn={j === 0}
            lastcolumn={j === levels[currentLevel].columns - 1}
            handleItemClick={() =>
              this.handleItemClick(j * levels[currentLevel].rows + i)
            }
          >
            {target === j * levels[currentLevel].rows + i ? <Target /> : null}
          </GridItem>
        );
      }
    }

    return (
      <Parent>
        <Helmet>
          <title>Grid Therapy</title>
          <meta name="description" content={description} />
          <meta content={description} property="og:description" />
          <link
            rel="canonical"
            href="https://chanmatthew.github.io/grid-therapy/"
          />
        </Helmet>
        <InfoContainer>
          <LevelContainer>
            <LevelTitle>Level</LevelTitle>
            <Level>
              <LevelSpan>{currentLevel + 1}</LevelSpan>
            </Level>
          </LevelContainer>
          <StageContainer>
            <StagesTitle>Stages</StagesTitle>
            <AttemptsContainer>
              {Object.keys(levels[currentLevel].stages).map(stage => (
                <Stage key={stage}>
                  {levels[currentLevel].stages[stage] === "failed" ? (
                    <Attempt />
                  ) : levels[currentLevel].stages[stage] === "passed" ? (
                    <Checkmark />
                  ) : null}
                </Stage>
              ))}
            </AttemptsContainer>
          </StageContainer>
          <RestartButton handler={this.resetGrid} />
        </InfoContainer>
        <Grid
          rows={levels[currentLevel].rows}
          columns={levels[currentLevel].columns}
          viewportHeight={viewportHeight}
        >
          {items}
        </Grid>
        <Modal levels={levels} restart={this.resetGrid} opened={isModalShown} />
      </Parent>
    );
  }
}

export default Main;
