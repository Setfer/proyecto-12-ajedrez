export const selecFicha= (id, fichas, dispatchPieces, dispatchBoard)=>{
  const ficha = fichas.find((ficha)=> ficha.id ===id)
  if (!ficha) return
  dispatchPieces({
    type:"SELECT_FICHA",
    payload:{
      id
    }
  })
  dispatchBoard({
    type: "ACTIVE_VALID",
    payload:{
      row: ficha.row + ficha.nextRow,
      col :ficha.col+ficha.nextCol,
      isValid:true
    }
  })
}