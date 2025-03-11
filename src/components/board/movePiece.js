
export const movePiece = (colBoard, rowBoard, fichas,dispatchPieces,dispatchBoard) => {
  const ficha = fichas.find((ficha) => ficha.active === true)
  if (!ficha) return
  const newRow = ficha.row + ficha.nextRow
  const newCol = ficha.col + ficha.nextCol
  if (rowBoard !== newRow) return
  if (colBoard !== newCol) return
  if (newRow < 8) {
    dispatchPieces({
      type: 'MOVE_FICHA',
      payload: {
        id: ficha.id,
        newRow: newRow,
        newCol: newCol
      }
    })
    dispatchBoard({
      type: 'DESACTIVATE_VALID'
    })
  }
}