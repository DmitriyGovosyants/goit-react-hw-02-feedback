import { ControlsList, Item, Button } from './Controls.styled';

export const Controls = () => {
  return (
    <ControlsList>
      <Item>
        <Button type="button">Good</Button>
      </Item>
      <Item>
        <Button type="button">Neutral</Button>
      </Item>
      <Item>
        <Button type="button">Bad</Button>
      </Item>
    </ControlsList>
  );
};
