import styles from "./Controls.module.css";

export type ControlsProps = {
  onClick: () => void;
  onReset: () => void;
  playerOneScore: number;
  playerTwoScore: number;
  roundCounter: number;
  winner: "X" | "O" | null;
  isGameStarted: boolean;
  tie: number;
};

const Controls = ({
  onClick,
  onReset,
  playerOneScore,
  playerTwoScore,
  roundCounter,
  winner,
  isGameStarted,
  tie,
}: ControlsProps) => {
  console.log(isGameStarted);
  return (
    <>
      <div className={styles.title}>Tic-Tac-Toe</div>
      <div className={styles.move}>
        {winner
          ? `Player ${winner} win`
          : !winner && roundCounter === 9
            ? `Tie`
            : isGameStarted
              ? `Game Started`
              : `Click Start Gamed`}
      </div>
      <div className={styles.players_score}>
        <div>Player X: {playerOneScore}</div>
        <div>Player O: {playerTwoScore}</div>
        <div>Ties: {tie}</div>
      </div>
      <div className={styles.controls}>
        <button onClick={onClick}>Start Game</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </>
  );
};

export default Controls;
