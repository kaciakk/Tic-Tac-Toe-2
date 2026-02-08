import styles from "./BoardTile.module.css";

export type BoardTileProps = {
  box: number;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPlayerOneMove: number[];
  onPlayerTwoMove: number[];
};
const BoardTile = ({
  box,
  onClick,
  onPlayerOneMove,
  onPlayerTwoMove,
}: BoardTileProps) => {
  return (
    <>
      {onPlayerOneMove.includes(box) ? (
        <div id={String(box)} onClick={onClick} className={styles.box}>
          <div className={styles.boxPlayerOneLine}></div>
          <div className={styles.boxPlayerOneLineTwo}></div>
        </div>
      ) : onPlayerTwoMove.includes(box) ? (
        <div id={box} onClick={onClick} className={styles.box}>
          <div className={styles.boxPlayerTwoObject}></div>
          <div className={styles.boxPlayerTwoCircle}></div>
        </div>
      ) : (
        <div id={box} onClick={onClick} className={styles.box}></div>
      )}
    </>
  );
};

export default BoardTile;
