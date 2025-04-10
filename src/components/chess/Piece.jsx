import React from 'react'


const Piece = ({
  casilla,
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
          selectPiece(
            casilla.piece.id,
            game,
            dispatchGame,
            dispatchBoard,
            board
          )
        }
        className='ficha'
        src={casilla.piece.img}
      />
    </div>
  )
}

export default Piece
