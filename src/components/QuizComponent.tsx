import { useState } from "react";
import "../styles/QuizComponent.css";
import quizData from "../../public/quizData.json";
import Question from "./Question";
import Result from "./Result";

function QuizComponent() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleOptionSelect = (selectedOption: string) => {
        if (selectedOption === quizData.questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion < quizData.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else if (currentQuestion === quizData.questions.length - 1) {
            setShowResult(true);
        }
    };

    return (
        <div className="quizComponent">
            {showResult ? (
                <Result score={score} total={quizData.questions.length}></Result>
            ) : (
                <Question
                    question={quizData.questions[currentQuestion].question}
                    options={quizData.questions[currentQuestion].options}
                    correctAnswer={quizData.questions[currentQuestion].correctAnswer}
                    onSelect={handleOptionSelect}
                ></Question>
            )}
        </div>
    );
}

export default QuizComponent;
