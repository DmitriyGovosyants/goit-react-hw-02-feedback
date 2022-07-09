import { Notification } from 'components';
import { StatisticsList, StatisticsItem, Value } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total === 0 && <Notification message="There is no feedback" />}
      {total !== 0 && (
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
            <Value>
              Positive feedback: {good === 0 ? 0 : positivePercentage}%
            </Value>
          </StatisticsItem>
        </StatisticsList>
      )}
    </>
  );
};
