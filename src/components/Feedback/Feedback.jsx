import { Component } from 'react';
import { MainTitle } from './Feedback.styled';
import { Container, Section, Controls, Statistics } from 'components';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementStatisticsValue = e => {
    const currentBtn = e.target.textContent.toLowerCase();

    this.setState(prev => {
      return { [currentBtn]: prev[currentBtn] + 1 };
    });
  };

  render() {
    const { state } = this;
    const { incrementStatisticsValue } = this;

    return (
      <Section>
        <Container>
          <MainTitle>Please leave feedback</MainTitle>
          <Controls onIncrState={incrementStatisticsValue} />
          <Statistics onChangeStateView={state} />
        </Container>
      </Section>
    );
  }
}
