import React, { useState } from "react";
import "./Board.css";

export const Board = () => {

    let count = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

    const [clickedCnt, setClickedCnt] = useState<number[]>(new Array(9).fill(0));

    const handleClick = (index: number) => {
        setClickedCnt(prev => {
            const newClickedCnt = [...prev];
            newClickedCnt[index] = (newClickedCnt[index] + 1) % 3;
            return newClickedCnt;
        });
    };

    return(
        <div>
            {count.map((cnt, index) => (
                <React.Fragment key={index}>
                    <button
                        className = "button"
                        onClick={() => handleClick(index)}
                    >
                        {clickedCnt[index] === 1 ? "●" : clickedCnt[index] === 2 ? "〇" : null}
                    </button>
                    {(index + 1) % 3 === 0 && <br />}
                </React.Fragment>
            ))}
        </div>
    )
}
