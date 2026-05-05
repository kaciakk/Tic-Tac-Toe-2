import BoardTile from "../BoardTile/BoardTile";
import styles from "./Board.module.css";

export type BoardProps = {
  size: number[];
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPlayerOneMove: number[];
  onPlayerTwoMove: number[];
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
              key={box}
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
