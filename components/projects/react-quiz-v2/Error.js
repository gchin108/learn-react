import styles from "./reactQuiz.module.css";

function Error() {
  return (
    <p className="m-auto bg-[#495057] text-lg w-fit p-3 rounded-full">
      <span>💥</span> There was an error fecthing questions.
    </p>
  );
}

export default Error;
