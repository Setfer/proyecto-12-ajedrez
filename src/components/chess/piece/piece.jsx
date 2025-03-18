import React from 'react'
import { selecFicha } from './selecFicha'

const Piece = ({casilla, chess, dispatchChess,dispatchBoard }) => {

  return (
    <div>
      <img
        onClick={() => selecFicha(casilla.piece.id, chess,dispatchChess, dispatchBoard)}
        className='ficha'
        src={casilla.piece.img}
      />
    </div>
  )
}

export default Piece
