import React, { useState } from "react";
import "./style.css";


const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

const TicTac = () => {
  const [squares, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (getCurrentSquare) => {
    const newSquares = [...squares];
    if (newSquares[getCurrentSquare]) {
      return;
    }
    newSquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setSquare(newSquares);
    setIsXTurn(!isXTurn);
  };

  const getWinner = () => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  };

  const restartGame = () => {
    setSquare(Array(9).fill(""));
    setIsXTurn(true);
  };

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      <div className="winner">
        {getWinner() && <h1>Winner is {getWinner()}</h1>}
        {!squares.some((square) => square === "") && (
          <button onClick={restartGame}>Restart Game</button>
        )}
      </div>
    </div>
  );
};

export default TicTac;