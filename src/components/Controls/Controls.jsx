import { ControlsList, ControlsItem, Button } from './Controls.styled';

export const Controls = ({ onIncrementValue }) => {
  return (
    <ControlsList>
      <ControlsItem>
        <Button type="button" onClick={onIncrementValue}>
          Good
        </Button>
      </ControlsItem>
      <ControlsItem>
        <Button type="button" onClick={onIncrementValue}>
          Neutral
        </Button>
      </ControlsItem>
      <ControlsItem>
        <Button type="button" onClick={onIncrementValue}>
          Bad
        </Button>
      </ControlsItem>
    </ControlsList>
  );
};
