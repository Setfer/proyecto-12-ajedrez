import React, { useRef } from 'react'

const Piece = ({casilla, fichas, dispatch}) => {


  


  const moverFicha = (id) => {
    const ficha = fichas.find((ficha) => ficha.id === id)
    if (!ficha) return
    const newRow = ficha.row +ficha.nextRow
    if (newRow < 8) {
      dispatch({
        type: 'MOVE_FICHA',
        payload: {
          id,
          newRow,
          newCol: ficha.col
        }
      })
    }
  }

  return (
    <div>
      <img
        onClick={() => moverFicha(casilla.ficha.id)}
        className='ficha'
        src={casilla.ficha.img}
      />
    </div>
  )
}

export default Piece
