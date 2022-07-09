import { Component } from 'react';
import { Container, Section, FeedbackOptions, Statistics } from 'components';
import { countTotalFeedback, countPositiveFeedbackPercentage } from 'helpers';
import { Page } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = index => {
    const options = Object.keys(this.state);
    const currentBtn = options[index];

    this.setState(prev => {
      return { [currentBtn]: prev[currentBtn] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { handleIncrement } = this;
    const total = countTotalFeedback(good, neutral, bad);
    const positive = countPositiveFeedbackPercentage(total, good);

    return (
      <Page>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={handleIncrement}
            />
          </Section>
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          </Section>
        </Container>
      </Page>
    );
  }
}
