import { Controls, ControlsItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Controls>
      {options.map((option, index) => {
        return (
          <ControlsItem key={option}>
            <Button type="button" onClick={() => onLeaveFeedback(index)}>
              {option}
            </Button>
          </ControlsItem>
        );
      })}
    </Controls>
  );
};
