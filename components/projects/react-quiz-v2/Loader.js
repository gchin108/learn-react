import styles from "./reactQuiz.module.css";

export default function Loader() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-[1.4rem] text-">
      <div className={styles.loader}></div>
      <p>Loading questions...</p>
    </div>
  );
}
