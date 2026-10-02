import { useState } from "react";
import Board from "./Board";
import "./styles.css"

const Main = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [isX, setIsX] = useState(false);
    const handlePlay = (d) => {
        setIsX(!isX);
        setHistory([...history, d])
    }
    return (
        <Board isX={isX} setIsX={setIsX} squares={history[history.length-1]} handlePlay={handlePlay} />
    )
}

export default Main;