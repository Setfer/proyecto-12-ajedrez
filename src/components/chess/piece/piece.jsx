import React, { useRef } from 'react'

const Piece = ({casilla, fichas, dispatch,dispatchBoard }) => {


  const selecFicha= (id)=>{
    const ficha = fichas.find((ficha)=> ficha.id ===id)
    if (!ficha) return
    dispatch({
      type:"SELECT_FICHA",
      payload:{
        id
      }
    })
    dispatchBoard({
      type: "ACTIVE_VALID",
      payload:{
        row: ficha.row + ficha.nextRow,
        col :ficha.col,
        isValid:true
      }
    })
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
