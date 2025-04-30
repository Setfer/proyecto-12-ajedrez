import React, { useEffect, useReducer } from 'react'
import './board.css'
import { setPieces } from '../../states/board/setPieces'

import {
  initialStateBoard,
  reducerBoard
} from '../../states/board/BoardReducer'
import Piece from '../piece/Piece'

const Board = ({ game, dispatchGame, selectPiece, movePiece }) => {
  const [board, dispatchBoard] = useReducer(reducerBoard, initialStateBoard)

  useEffect(() => {
    setPieces(game, dispatchBoard)
  }, [game.pieces])

  return (
    <div className='board'>
      {board.flat().map((square, index) => (
        <div
          onClick={() => {
            movePiece(
              square.col,
              square.row,
              game.pieces,
              dispatchGame,
              dispatchBoard,
              board
            )
          }}
          className={`${square.color} ${
            square.isValid === true ? 'valid-move' : ''
          }`}
          key={index}
        >
          {square.piece && (
            <Piece
              square={square}
              game={game}
              dispatchGame={dispatchGame}
              dispatchBoard={dispatchBoard}
              board={board}
              selectPiece={selectPiece}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Board
