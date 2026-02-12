const Square = ({value, handleClick}) => {
    return (
        <button className="square-box" onClick={handleClick}>{value}</button>
    )
};

export default Square;