import React, { useState } from "react";
import "./Board.css";

export const Board = () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [clickedMarks, setClickedMarks] = useState<{ [key: number]: "●" | "×" | undefined }>({});
    const [nextMark, setNextMark] = useState<"●" | "×">("●");

    const handleClick = (n: number) => {
        if (clickedMarks[n]) return; // すでにクリック済みなら何もしない

        setClickedMarks(prev => ({
            ...prev,
            [n]: nextMark
        }));

        setNextMark(prev => (prev === "●" ? "×" : "●"));
    };

    return (
        <div className="board">
            {num.map((n, index) => {
                const mark = clickedMarks[n];
                const className = `button ${mark === "●" ? "circle" : mark === "×" ? "cross" : ""}`;

                return (
                    <button 
                        key={index} 
                        className={className}
                        onClick={() => handleClick(n)}
                    >
                        {mark || ""}
                    </button>
                );
            })}
        </div>
    );
};
