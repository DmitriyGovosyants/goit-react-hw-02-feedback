import { ControlsList, ControlsItem, Button } from './Controls.styled';

export const Controls = ({ onIncrState }) => {
  return (
    <ControlsList>
      <ControlsItem>
        <Button type="button" onClick={onIncrState}>
          Good
        </Button>
      </ControlsItem>
      <ControlsItem>
        <Button type="button" onClick={onIncrState}>
          Neutral
        </Button>
      </ControlsItem>
      <ControlsItem>
        <Button type="button" onClick={onIncrState}>
          Bad
        </Button>
      </ControlsItem>
    </ControlsList>
  );
};
