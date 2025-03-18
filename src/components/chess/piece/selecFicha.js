export const selecFicha= (id, chess, dispatchChess, dispatchBoard)=>{
  const piece = chess.pieces.find((piece)=> piece.id ===id)
  if (!piece || chess.turno !== piece.color ) return
  dispatchChess({
    type:"SELECT_FICHA",
    payload:{
      id
    }
  })
  dispatchBoard({
    type: "ACTIVE_VALID",
    payload:{
      rows: piece.nextRows.map((row)=>row+piece.row),
      cols :piece.nextCols.map((col)=>col+piece.col),
      isValid:true,
      color: piece.color
    }
  })
}