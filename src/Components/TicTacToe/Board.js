import { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [toggle, setToggle] = useState(false);
    const [isWinner, setIsWinner] = useState();
    const handleClick = (i) => {
        if(squares[i] || checkWinner(squares)) return;
        const squareCopy = squares.slice();
        if(toggle) {
            squareCopy[i] = "X"
        } else {
            squareCopy[i] = "O"
        }
        setSquares(squareCopy);
        setToggle(!toggle);
        checkWinner(squareCopy);
    }

    const checkWinner = (squares) => {
        const checks = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];
        for(let i=0;i<checks.length;i++) {
            const [a, b, c] = checks[i];
            if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
                setIsWinner(squares[a]);
                return true;
            }
        }
    }
    return (
        <>
        {isWinner && <p>Winner is {isWinner}</p>}
        <div className="board-container">
            <div className="row">
                <Square value={squares[0]} handleClick={()=>handleClick(0)} />
                <Square value={squares[1]} handleClick={()=>handleClick(1)} />
                <Square value={squares[2]} handleClick={()=>handleClick(2)} />
            </div>

            <div className="row">
                <Square value={squares[3]} handleClick={()=>handleClick(3)} />
                <Square value={squares[4]} handleClick={()=>handleClick(4)} />
                <Square value={squares[5]} handleClick={()=>handleClick(5)} />
            </div>

            <div className="row">
                <Square value={squares[6]} handleClick={()=>handleClick(6)} />
                <Square value={squares[7]} handleClick={()=>handleClick(7)} />
                <Square value={squares[8]} handleClick={()=>handleClick(8)} />
            </div>

        </div>
        </>
    );
}

export default Board;