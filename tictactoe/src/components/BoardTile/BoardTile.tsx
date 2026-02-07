import styles from "./BoardTile.module.css";

const BoardTile = ({ box, onClick, onPlayerOneMove, onPlayerTwoMove }) => {
  return (
    <>
      {onPlayerOneMove.includes(box) ? (
        <div id={box} onClick={onClick} className={styles.box}>
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
