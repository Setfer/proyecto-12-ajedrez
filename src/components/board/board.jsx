import React, { useEffect, useReducer } from 'react'
import './board.css'
import { setPieces } from './setPieces'


import { initialStateBoard, reducerBoard } from '../states/BoardReducer'
import Piece from '../piece/Piece'


const Board = ({ game, dispatchGame, selectPiece, movePiece }) => {
  const [board, dispatchBoard] = useReducer(reducerBoard, initialStateBoard)

  useEffect(() => {
    setPieces(game, dispatchBoard)
  }, [game.pieces])

  return (
    <div className='board'>
      {board.flat().map((casilla, index) => (
        <div
          onClick={() => {
            movePiece(
              casilla.col,
              casilla.row,
              game.pieces,
              dispatchGame,
              dispatchBoard,
              board
            )
          }}
          className={`${casilla.color} ${
            casilla.isValid === true ? 'valid-move' : ''
          }`}
          key={index}
        >
          {casilla.piece ? (
            <Piece
              casilla={casilla}
              game={game}
              dispatchGame={dispatchGame}
              dispatchBoard={dispatchBoard}
              board={board}
              selectPiece={selectPiece}
            />
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  )
}

export default Board
