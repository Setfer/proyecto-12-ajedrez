import React from 'react'
import './piece.css'

const Piece = ({
  square,
  game,
  dispatchGame,
  dispatchBoard,
  board,
  selectPiece
}) => {
  return (
    <div>
      <img
        onClick={() =>
          selectPiece(square.piece.id, game, dispatchGame, dispatchBoard, board)
        }
        className='piece'
        src={square.piece.img}
      />
    </div>
  )
}

export default Piece
