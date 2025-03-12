export const movePiece = (
  colBoard,
  rowBoard,
  fichas,
  dispatchPieces,
  dispatchBoard,
  board
) => {
  const ficha = fichas.find((ficha) => ficha.active === true)
  if (!ficha) return
  const newRows = ficha.nextRows.map((row) => row + ficha.row)
  const newCols = ficha.nextCols.map((col) => col + ficha.col)

  const esMovimientoValido = newRows.some(
    (row, index) => row === rowBoard && newCols[index] === colBoard
  )
  if (!esMovimientoValido) return

  console.log(board[rowBoard][colBoard].ficha.id)
  if (board[rowBoard][colBoard].ficha){
    dispatchPieces({
      type: "DELETE_PIECE",
      payload:{
        id: board[rowBoard][colBoard].ficha.id
      }
    })
  }



  dispatchPieces({
    type: 'MOVE_FICHA',
    payload: {
      id: ficha.id,
      newRow: rowBoard,
      newCol: colBoard
    }
  })
  dispatchBoard({
    type: 'DESACTIVATE_VALID'
  })
}
