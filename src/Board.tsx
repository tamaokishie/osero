import React, { useState } from "react";
import "./Board.css";

export const Board = () => {

    let count = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

    const [clickedNum, setClickedNum] = useState<number>(0);

    const handleClick = (cnt: number) => {
        setClickedNum(cnt);
    };

    return(
        <div>
            {count.map((cnt, index) => (
                <React.Fragment key={index}>
                    <button
                        className = "button"
                        onClick={() => handleClick(cnt)}
                    >
                        {clickedNum === cnt ? clickedNum : null}
                    </button>
                    {(index + 1) % 3 === 0 && <br />}
                </React.Fragment>
            ))}
        </div>
    )
}
