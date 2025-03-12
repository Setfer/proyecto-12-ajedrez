export const movePiece = (
  colBoard,
  rowBoard,
  fichas,
  dispatchPieces,
  dispatchBoard
) => {
  const ficha = fichas.find((ficha) => ficha.active === true)
  if (!ficha) return
  const newRows = ficha.nextRows.map((row) => row + ficha.row)
  const newCols = ficha.nextCols.map((col) => col + ficha.col)
  
  const esMovimientoValido = newRows.some(
    (row, index) => row === rowBoard && newCols[index] === colBoard
  )

  if (!esMovimientoValido) return

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
