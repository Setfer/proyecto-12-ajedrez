export const peon = (chess, piece) => {
  //si la ficha tiene alguna diagonal para comer
  const piezasParaComer = chess.pieces.filter(
    (pieceComer) =>
      pieceComer.color !== piece.color &&
      ((piece.color === 'white' &&
        pieceComer.row === piece.row + 1 &&
        (pieceComer.col === piece.col + 1 ||
          pieceComer.col === piece.col - 1)) ||
        (piece.color === 'black' &&
          pieceComer.row === piece.row - 1 &&
          (pieceComer.col === piece.col + 1 ||
            pieceComer.col === piece.col - 1)))
  )

  //nuevas posibles filas
  const nextRows = [
    ...piece.nextRows.map((row) => row + piece.row),
    ...(piezasParaComer.map((p) => p.row) || [])
  ]

  //nuevas posibles columnas
  const nextCols = [
    ...piece.nextCols.map((col) => col + piece.col),
    ...(piezasParaComer.map((p) => p.col) || [])
  ]

  //si es el primer moviento.
  const primerMovimiento = piece.row === 1 || piece.row === 6 ? true : false

  //si el peon esta en la posicion inial
  if (primerMovimiento) {
    return {
      rows:
        piece.color === 'white'
          ? [...[piece.row + 1, piece.row + 2], ...[nextRows]]
          : [...[piece.row - 1, piece.row - 2], ...[nextRows]],
      cols: piece.nextCols.map((col) => col + piece.col),
      color: piece.color
    }
  } else {
    return {
      rows: nextRows,
      cols: nextCols,
      color: piece.color
    }
  }
}
