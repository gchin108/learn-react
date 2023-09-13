"use client";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";
import { useReducer } from "react";
import styles from "./reactQuiz.module.css";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Options from "./Options";
import NextBtn from "./NextBtn";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const SECS_PER_QUESTION = 1

const initialState = {
  questions: [],
  index: 0,
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  answer: null,
  points: 0,
  highscore:0,
  remainingSeconds:null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active", remainingSeconds:state.questions.length *SECS_PER_QUESTION};
    case "newAnswer":
      const curQuestion = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === curQuestion.correctOption
            ? state.points + curQuestion.points
            : state.points,
      };
    case "nextQuestion":
      console.log(state.questions.length)
      return { ...state, index: state.index + 1, answer: initialState.answer};
    case "gameFinished":
      return {...state, status: "finished", highscore:state.points>0&&state.points>state.highscore?state.points:state.highscore}
    case "restart":
      return {
        ...initialState,
        status: "active",
        highscore: state.highscore,
        questions: state.questions,
        remainingSeconds: state.questions.length * SECS_PER_QUESTION,
      };
    case "tick":
      return {
        ...state,
        remainingSeconds: state.remainingSeconds - 1,
        status: state.remainingSeconds === 0 ? "finished" : state.status,
        highscore:
          state.points > 0 && state.points > state.highscore
            ? state.points
            : state.highscore,
      };
    default:
      throw new Error("Action unknown");
  }
}

export default function ReactQuiz() {
  const [
    { questions, status, index, answer, points, highscore, remainingSeconds },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev,cur)=> prev + cur.points,0)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        // console.log(data)
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchData();
  }, []);


  return (
    <div className="relative">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question questions={questions[index]}>
              <Options
                questions={questions[index]}
                answer={answer}
                dispatch={dispatch}
                index={index}
              />

              <Footer>
                <Timer
                  remainingSeconds={remainingSeconds}
                  dispatch={dispatch}
                />
                {answer !== null && (
                  <NextBtn
                    dispatch={dispatch}
                    index={index}
                    numQuestions={numQuestions}
                  />
                )}
              </Footer>
            </Question>
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
