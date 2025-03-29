import React from 'react'
import { selecFicha } from './selecFicha'

const Piece = ({casilla, chess, dispatchChess,dispatchBoard, board }) => {

  return (
    <div>
      <img
        onClick={() => selecFicha(casilla.piece.id, chess,dispatchChess, dispatchBoard, board)}
        className='ficha'
        src={casilla.piece.img}
      />
    </div>
  )
}

export default Piece
