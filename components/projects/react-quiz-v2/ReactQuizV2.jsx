"use client"
import React from "react";

import { useQuiz } from "@/contexts/QuizContext";
import Header from "./Header";
import Main from "./Main";
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

export default function ReactQuizV2() {
  const { status, answer } = useQuiz();

  return (
    <div className="relative">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question>
            <Options/>
              <Footer>
                <Timer />
                {answer !== null && <NextBtn />}
              </Footer>
            </Question>
          </>
        )}
        {status === "finished" && <FinishedScreen />}
      </Main>
    </div>
  );
}
