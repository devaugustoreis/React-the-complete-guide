import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    
    function handleSelectSquare(row, col) {
        setGameBoard((previousGameBoard) => {
            const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[row][col] = activePlayerSymbol
            return updatedBoard
        })

        onSelectSquare()
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            )}
        </ol>
    )

}