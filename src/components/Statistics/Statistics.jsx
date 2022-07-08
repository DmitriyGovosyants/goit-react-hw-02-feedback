import { Component } from 'react';
import {
  ControlsList,
  ControlsItem,
  Button,
  StatisticsList,
  StatisticsItem,
  Value,
} from './Statistics.styled';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 2,
    bad: 0,
  };

  incrementFeedback = e => {
    const currentBtn = e.target.textContent.toLowerCase();

    this.setState(prev => {
      return { [currentBtn]: prev[currentBtn] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { incrementFeedback } = this;

    return (
      <>
        <h1>Please leave feedback</h1>
        <ControlsList>
          <ControlsItem>
            <Button type="button" onClick={incrementFeedback}>
              Good
            </Button>
          </ControlsItem>
          <ControlsItem>
            <Button type="button" onClick={incrementFeedback}>
              Neutral
            </Button>
          </ControlsItem>
          <ControlsItem>
            <Button type="button" onClick={incrementFeedback}>
              Bad
            </Button>
          </ControlsItem>
        </ControlsList>
        <h2>Statistics</h2>
        <StatisticsList>
          <StatisticsItem>
            <Value>Good: {good}</Value>
          </StatisticsItem>
          <StatisticsItem>
            <Value>Neutral: {neutral}</Value>
          </StatisticsItem>
          <StatisticsItem>
            <Value>Bad: {bad}</Value>
          </StatisticsItem>
        </StatisticsList>
      </>
    );
  }
}
