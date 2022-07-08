import { StatisticsList, Item, Value } from './Statistics.styled';

export const Statistics = () => {
  return (
    <>
      <h2>Statistics</h2>
      <StatisticsList>
        <Item>
          <Value>Good: 3</Value>
        </Item>
        <Item>
          <Value>Neutral: 2</Value>
        </Item>
        <Item>
          <Value>Bad: 2</Value>
        </Item>
      </StatisticsList>
    </>
  );
};
