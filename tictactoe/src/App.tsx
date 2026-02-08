import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Board from "./components/Board/Board";
import Controls from "./components/Controls/Controls";

const winningPattern: [number, number, number][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [1, 5, 9],
];

const size: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [isPlayersMoves, setIsPlayersMoves] = useState<boolean>(false);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  const [playerOneMove, setPlayerOneMove] = useState<number[]>([]);
  const [playerTwoMove, setPlayerTwoMove] = useState<number[]>([]);
  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);
  const [roundCounter, setRoundCounter] = useState<number>(0);
  const [tie, setTie] = useState<number>(0);

  const playerOneWins = winningPattern.some((patern) =>
    patern.every((cell) => playerOneMove.includes(cell)),
  );
  const playerTwoWins = winningPattern.some((patern) =>
    patern.every((cell) => playerTwoMove.includes(cell)),
  );

  const winner = playerOneWins ? "X" : playerTwoWins ? "O" : null;

  useEffect(() => {
    if (!winner) return;
    if (winner === "X") {
      setPlayerOneScore((prev) => prev + 1);
    } else if (winner === "O") {
      setPlayerTwoScore((prev) => prev + 1);
    }
  }, [winner]);
  useEffect(() => {
    if (roundCounter === 9 && !winner) {
      setTie((prev) => prev + 1);
    }
  }, [roundCounter]);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (winner) {
      return console.error("rozpocznij nowa gre, mamy juz wygranego");
    } else if (!isGameStarted) {
      return console.log("rozpocznij gre...");
    } else {
      const currentClick = Number(e.currentTarget.id);
      if (
        playerOneMove.includes(currentClick) ||
        playerTwoMove.includes(currentClick)
      ) {
        return console.log("ktos juz to kliknał ");
      }
      if (!isPlayersMoves) {
        setPlayerOneMove((prev) => [...prev, currentClick]);
        setIsPlayersMoves((prev) => !prev);
        setRoundCounter((prev) => prev + 1);
      } else {
        setPlayerTwoMove((prev) => [...prev, currentClick]);
        setIsPlayersMoves((prev) => !prev);
        setRoundCounter((prev) => prev + 1);
      }
    }
  }

  function handleReset() {
    setIsPlayersMoves(false);
    setIsGameStarted(false);
    setPlayerOneMove([]);
    setPlayerTwoMove([]);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setTie(0);
    setRoundCounter(0);
  }

  function startGame() {
    setIsPlayersMoves(false);
    setIsGameStarted(true);
    setPlayerOneMove([]);
    setPlayerTwoMove([]);

    setRoundCounter(0);
  }

  return (
    <>
      <div className={styles.page}>
        <div className={styles.score}>
          <Board
            size={size}
            onClick={handleClick}
            onPlayerOneMove={playerOneMove}
            onPlayerTwoMove={playerTwoMove}
          />
        </div>
        <div className={styles.control}>
          <Controls
            onClick={startGame}
            onReset={handleReset}
            playerOneScore={playerOneScore}
            playerTwoScore={playerTwoScore}
            roundCounter={roundCounter}
            winner={winner}
            isGameStarted={isGameStarted}
            tie={tie}
          />
        </div>
      </div>
    </>
  );
}

export default App;
