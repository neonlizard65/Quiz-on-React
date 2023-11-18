import { useState } from "react";
import "../styles/Option.css";

//Interface props (immutable)
interface OptionProps {
    optionText: string;
    isCorrect: boolean;
    onSelect: (selectedOption: string) => void;
}

function Option({ optionText, isCorrect, onSelect }: OptionProps) {
    const [isSelected, setIsSelected] = useState(false);

    const handleOptionClick = () => {
        //Checking if we can click the button (can't if already answered)
        let canClick = true;
        const options = document.getElementsByClassName("option");
        for (const option of options) {
            if (option.classList.contains("correct") || option.classList.contains("incorrect")) {
                canClick = false;
            }
        }
        //If can click and item isn't selected
        if (!isSelected && canClick) {
            setIsSelected(true);
            setTimeout(() => {
                setIsSelected(false);
                onSelect(optionText);
            }, 2000);
        }
    };

    return (
        <div
            className={`option ${isSelected ? (isCorrect ? "correct" : "incorrect") : ""}`}
            onClick={handleOptionClick}
        >
            <p>{optionText}</p>
        </div>
    );
}

export default Option;
