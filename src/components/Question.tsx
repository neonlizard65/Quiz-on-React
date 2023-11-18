import Option from "./Option";
import "../styles/Question.css";

interface QuestionProps {
    question: string;
    options: string[];
    correctAnswer: string;
    onSelect: (selectedOption: string) => void;
}

function Question({ question, options, correctAnswer, onSelect }: QuestionProps) {
    return (
        <div className="question">
            <div className="questionText">{question}</div>
            <div className="options">
                {options.map((option, key) => (
                    <Option
                        key={key}
                        optionText={option}
                        isCorrect={option == correctAnswer}
                        onSelect={onSelect}
                    ></Option>
                ))}
            </div>
        </div>
    );
}

export default Question;
