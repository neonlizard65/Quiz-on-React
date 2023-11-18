import "../styles/Result.css";

interface ResultProps {
    score: number;
    total: number;
}

function Result({ score, total }: ResultProps) {
    const percent: number = Math.round((score / total) * 100);

    const getFeedbackMessage = (percent: number): string => {
        if (percent === 100) {
            return "Perfect score! Amazing!";
        } else if (percent < 100 && percent >= 90) {
            return "That's a great score!";
        } else if (percent < 90 && percent >= 80) {
            return "Not bad!";
        } else if (percent < 80 && percent >= 60) {
            return "You can do better next time!";
        } else {
            return "Looks like somebody needs to study!";
        }
    };

    return (
        <div className="result">
            <p>
                Your score: {score}/{total}
            </p>
            <p>
                That's {percent}%! {getFeedbackMessage(percent)}
            </p>
        </div>
    );
}

export default Result;
