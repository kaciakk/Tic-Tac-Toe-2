import BoardTile from "../BoardTile/BoardTile";
import styles from "./Board.module.css";

export type BoardProps = {
  size: number;
  onClick: () => void;
};
const Board = ({
  size,
  onClick,
  onPlayerOneMove,
  onPlayerTwoMove,
}: BoardProps) => {
  return (
    <>
      <div className={styles.board}>
        {size.map((box) => {
          return (
            <BoardTile
              box={box}
              onClick={onClick}
              onPlayerOneMove={onPlayerOneMove}
              onPlayerTwoMove={onPlayerTwoMove}
            />
          );
        })}
      </div>
    </>
  );
};

export default Board;
