import { useRef, useState } from "react";
import music from "../assets/song.mp3";
import styles from "./Music.module.css";
function Music() {
  const ref = useRef(null);
  const [click, setClick] = useState(false);
  const [isanimationPaused, setAnimationPaused] = useState(true);
  const handleClick = () => {
    setClick(!click);
    setAnimationPaused(!isanimationPaused);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <>
      <div onClick={() => handleClick()} className={styles.music}>
        <p className={isanimationPaused ? styles.paused : styles.play}></p>
        <p className={isanimationPaused ? styles.paused : styles.play}></p>
        <p className={isanimationPaused ? styles.paused : styles.play}></p>
        <p className={isanimationPaused ? styles.paused : styles.play}></p>
        <p className={isanimationPaused ? styles.paused : styles.play}></p>
        <p className={isanimationPaused ? styles.paused : styles.play}></p>
        <p className={isanimationPaused ? styles.paused : styles.play}></p>
        <audio src={music} ref={ref} loop />
      </div>
    </>
  );
}
export default Music;
