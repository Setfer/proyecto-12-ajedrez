import React, { useCallback } from 'react'
import './board.css'

import Piece from '../Piece/Piece'
import { useBoard } from '../../custom/useBoard'

const Board = ({ game, dispatchGame, selectPiece, movePiece }) => {
  const { board, dispatchBoard, memoizedSelectPiece } = useBoard(game, selectPiece, dispatchGame)

  console.log('soy board')
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
              id={square.piece.id}
              img={square.piece.img}
              onClick={()=> memoizedSelectPiece(square.piece.id)}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Board
