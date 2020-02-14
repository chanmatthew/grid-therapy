import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import { Helmet } from "react-helmet";

import GridItem from "../components/GridItem";
import Modal from "../components/Modal";

const description =
  "An application that accesses a person's ability to recognize a moving target.";

const Parent = styled.div`
  position: relative;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  height: 28vh;
  background-color: rgba(200, 189, 171, 1);
`;

const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LevelTitle = styled.span`
  font-size: 2.5rem;
  letter-spacing: 0.04em;
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.2);
`;

const Level = styled.span`
  font-size: 7rem;
  letter-spacing: 0.0175em;
  font-weight: 800;
  color: rgba(250, 238, 216, 1);
`;

const StagesTitle = styled.span`
  font-size: 2.5rem;
  letter-spacing: 0.04em;
  font-weight: 800;
  text-transform: uppercase;
`;

const AttemptsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const StageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.2);
`;

const Stage = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 6.25em;
  width: 5em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 1.25em;
  }
`;

const Attempt = styled.div`
  position: relative;
  width: 15px;
  height: 67.5px;
  background-color: #ff6f6f;
  transform: rotate3d(0, 0, 1, 45deg);
  border-radius: 0.125em;
  transition: all 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 67.5px;
    background-color: #ff6f6f;
    transform: rotate3d(0, 0, 1, 90deg);
    border-radius: 0.125em;
    transition: all 0.2s ease;
  }
`;

const Checkmark = styled.div`
  position: relative;
  width: 15px;
  height: 60px;
  background-color: #96d796;
  transform: rotate3d(0, 0, 1, 35deg);
  border-radius: 0.125em;
  transition: all 0.2s ease;
  margin-left: 1em;

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 15px;
    background-color: #96d796;
    border-radius: 0.125em;
    transition: all 0.2s ease;
    bottom: 0;
    right: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72vh;
  justify-content: center;
  align-content: center;
  grid-template: repeat(${props => props.rows}, 90px) / repeat(
      ${props => props.columns},
      90px
    );
  user-select: none;
`;

const Target = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: rgba(200, 189, 171, 1);
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const RestartButton = styled.div`
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 3em;
  width: 3em;
  cursor: pointer;
  user-select: none;
  opacity: 0.8;
  transition: all 0.2s ease;
  position: absolute;
  right: 2em;
  bottom: 1.8em;

  &:hover {
    opacity: 1;
  }
`;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Main extends Component {
  state = {
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
    this.setState({ target: getRandomInt(this.getTotalItems(0)) });
  }

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
    const { currentLevel, levels, target, isModalShown } = this.state;

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
            <Level>{currentLevel + 1}</Level>
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
        </InfoContainer>
        <Grid
          rows={levels[currentLevel].rows}
          columns={levels[currentLevel].columns}
        >
          {items}
        </Grid>
        <RestartButton src="/graphics/restart.svg" onClick={this.resetGrid} />
        <Modal levels={levels} restart={this.resetGrid} opened={isModalShown} />
      </Parent>
    );
  }
}

export default Main;
