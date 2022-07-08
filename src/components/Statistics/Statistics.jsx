import { countTotalFeedback, countPositiveFeedbackPercentage } from 'helpers';
import { StatisticsList, StatisticsItem, Value } from './Statistics.styled';

export const Statistics = ({ onRenderValue }) => {
  const { good, neutral, bad } = onRenderValue;
  const total = countTotalFeedback(good, neutral, bad);
  const positive = countPositiveFeedbackPercentage(total, good);

  return (
    <>
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
        <StatisticsItem>
          <Value>Total: {total}</Value>
        </StatisticsItem>
        <StatisticsItem>
          <Value>Positive feedback: {good === 0 ? 0 : positive}%</Value>
        </StatisticsItem>
      </StatisticsList>
    </>
  );
};
