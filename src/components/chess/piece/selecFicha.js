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
      rows: ficha.nextRows.map((row)=>row+ficha.row),
      cols :ficha.nextCols.map((col)=>col+ficha.col),
      isValid:true
    }
  })
}