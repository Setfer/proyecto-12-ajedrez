import React from 'react'
import { selecFicha } from './selecFicha'

const Piece = ({casilla, fichas, dispatchPieces,dispatchBoard }) => {

  return (
    <div>
      <img
        onClick={() => selecFicha(casilla.ficha.id, fichas,dispatchPieces, dispatchBoard)}
        className='ficha'
        src={casilla.ficha.img}
      />
    </div>
  )
}

export default Piece
