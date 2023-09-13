import { useEffect } from "react";
import styles from "./reactQuiz.module.css";

export default function Timer({ remainingSeconds, dispatch }) {
  const min = Math.floor(remainingSeconds / 60);
  const sec = Math.floor(remainingSeconds % 60);

  useEffect(() => {
    function callback() {
      dispatch({ type: "tick" });
    }
    // Set the interval and store its ID
    const intervalId = setInterval(callback, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);
  return (
    <div className={styles.timer}>
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}
