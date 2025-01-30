import React from "react";
import "./Board.css";

export const Board = () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [marks, setMarks] = useState<{ [key: number]: "●" | "×" | undefined }>({});
    const [nextMark, setNextMark] = useState<"●" | "×">("●");

    const handleClick = (n: number) => {
        if (marks[n]) return;

        setMarks(prev => ({
            ...prev,
            [n]: nextMark
        }));

        setNextMark(prev => (prev === "●" ? "×" : "●"));
    };

    return (
        <div className="board">
            {num.map((n, index) => (
                <button 
                    key={index} 
                    className="button"
                    onClick={() => handleClick(n)}
                >
                    {marks[n] || ""}
                </button>
                
            ))}
        </div>
    );
};
function useState<T>(arg0: {}): [any, any] {
    throw new Error("Function not implemented.");
}

