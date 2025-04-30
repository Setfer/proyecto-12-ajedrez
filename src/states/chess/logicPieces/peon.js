export const peon = (piece, board) => {
  const { row, col, color, nextCols, nextRows } = piece
  const direction = color === 'white' ? 1 : -1
  const startRow = color === 'white' ? 1 : 6
  const dobleMoveRow = row + 2 * direction

  //si la ficha tiene alguna diagonal para comer
  const piezasParaComer = board
    .flat()
    .filter(
      (square) =>
        square.piece &&
        square.piece.color !== color &&
        square.row === row + direction &&
        (square.col === col + 1 || square.col === col - 1)
    )

  //nuevas posibles filas
  const nextRowsMove = [
    ...nextRows.map((r) => r + row),
    ...(piezasParaComer.map((p) => p.row) || [])
  ]

  //nuevas posibles columnas
  const nextColsMove = [
    ...nextCols.map((c) => c + col),
    ...(piezasParaComer.map((p) => p.col) || [])
  ]

  //si es el primer moviento.
  const primerMovimiento = row === 1 || row === 6 ? true : false

  //si tiene una ficha delante
  const pieceInFront = board[row + direction]?.[col]?.piece

  //si puede doble paso
  const doubleMove =
    primerMovimiento &&
    row === startRow &&
    !pieceInFront &&
    !board[dobleMoveRow][col]?.piece
  console.log(doubleMove, pieceInFront)

  if (doubleMove) {
    nextRowsMove.push(dobleMoveRow)
    nextColsMove.push(col)
  }

  if (pieceInFront) {
    return {
      rows: piezasParaComer.map((p) => p.row),
      cols: piezasParaComer.map((p) => p.col),
      color: color
    }
  }

  return {
    rows: nextRowsMove,
    cols: nextColsMove,
    color
  }
}
