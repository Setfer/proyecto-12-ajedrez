import React, { useRef } from 'react'

const Piece = ({casilla, fichas, dispatch, setBoard}) => {


  const selecFicha= (id)=>{
    const ficha = fichas.find((ficha)=> ficha.id ===id)
    if (!ficha) return
    dispatch({
      type:"SELECT_FICHA",
      payload:{
        id
      }
    })
    updateCasilla ((ficha.row + ficha.nextRow), ficha.col, {isValid: true})
  }


  const updateCasilla = (row, col, newValues) => {
    setBoard((prevBoard) =>
      prevBoard.map((fila, r) =>
        fila.map((casilla, c) =>
          r === row && c === col
            ? { ...casilla, ...newValues } // Solo modificamos la casilla específica
            : casilla
        )      
      )    
    )
  }


  return (
    <div>
      <img
    
        onClick={() => selecFicha(casilla.ficha.id)}
        className='ficha'
        src={casilla.ficha.img}
      />
    </div>
  )
}

export default Piece
