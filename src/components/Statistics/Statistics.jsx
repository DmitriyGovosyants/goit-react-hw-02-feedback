import { StatisticsList, StatisticsItem, Value } from './Statistics.styled';

export const Statistics = ({ onChangeStateView }) => {
  const { good, neutral, bad } = onChangeStateView;
  console.log(onChangeStateView);
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
      </StatisticsList>
    </>
  );
};
