import React, { useState } from "react"

export const Board = () => {

    let number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

    const [clickedNum, setClickedNum] = useState<number>(0);

    const handleClick = (num: number) => {
        setClickedNum(num);
    };

    return(
        <div>
            {number.map((num, index) => (
                <React.Fragment key={index}>
                    <button onClick={() => handleClick(num)}>
                        {clickedNum === num ? clickedNum :''}
                    </button>
                    {(index + 1) % 3 === 0 && <br />}
                </React.Fragment>
            ))}
        </div>
    )
}
