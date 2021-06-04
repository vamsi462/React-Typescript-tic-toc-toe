import { BoardState } from "./GameState";
type StepProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};
export const Steps = (props: StepProps) => {
  return (
    <ol>
      {props.history.map((_, index) => {
        return (
          <li key={index}>
            <button onClick={() => props.jumpTo(index)}>
              Go to{index === 0 ? "start" : `move#${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
};
