import React, { useEffect, useReducer } from 'react'
import './board.css'
import { setPieces } from './setPieces'
import Piece from '../chess/Piece'

import { initialStateBoard, reducerBoard } from '../states/BoardReducer'
import { movePiece } from './movePiece'

const Board = ({ game, dispatchGame, selectPiece }) => {
  const [board, dispatchBoard] = useReducer(reducerBoard, initialStateBoard)
  console.log(game)
  useEffect(() => {
    setPieces(game, dispatchBoard)
    console.log(game)
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
            casilla.isValid === true ? 'active' : ''
          }`}
          key={index}
        >
          <p>
            {casilla.color}
            {casilla.row}, {casilla.col}
          </p>
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
