import styles from "./reactQuiz.module.css"

export default function Progress({ index, numQuestions, points, maxPossiblePoints,answer }) {
return (
  <header className={styles.progressHeader}>
    <progress
      className={styles.customProgress}
      max={numQuestions}
      value={index + Number(answer !== null)} //true: index + 1, false: index + 0
    />
    <p>
      Question <strong>{index + 1}</strong> / {numQuestions}
    </p>
    <p>
      <strong>{points}</strong>/ {maxPossiblePoints}
    </p>
  </header>
);
}
