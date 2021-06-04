import { useGameState } from "./GameState";
import { Steps } from "./Step";
import { Column, Row } from "./Layout";
import { Board } from "./Board";

const Game = () => {
  const { gameState, current, handleClick, winner, jumpTo, xIsNext } =
    useGameState();
  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>
          {winner
            ? `winner is ${winner}`
            : `NextPlayer is ${xIsNext ? "X" : "O"}`}
        </div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <Steps history={gameState.history} jumpTo={jumpTo} />
    </Row>
  );
};

export default Game;
