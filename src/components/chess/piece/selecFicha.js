export const selecFicha = (id, chess, dispatchChess, dispatchBoard) => {
  const piece = chess.pieces.find((piece) => piece.id === id)
  if (!piece || chess.turno !== piece.color) return
  dispatchChess({
    type: 'SELECT_FICHA',
    payload: {
      id
    }
  })

  let payload
  //si la ficha es peon
  if (piece.type === 'peon') {
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

    payload = {
      
    }


    //si es el primer moviento.
    const primerMovimiento = piece.row === 1 || piece.row === 6 ? true : false

    //si el peon estan en la posicion inial
    if (primerMovimiento) {
      payload = {
        rows:
          piece.color === 'white'
            ? [piece.row + 1, piece.row + 2]
            : [piece.row - 1, piece.row - 2],
        cols: piece.nextCols.map((col) => col + piece.col),
        isValid: true,
        color: piece.color
      }
    }
  }  else {
    payload = {
      rows: piece.nextRows.map((row) => row + piece.row),
      cols: piece.nextCols.map((col) => col + piece.col),
      isValid: true,
      color: piece.color
    }
  }

  dispatchBoard({
    type: 'ACTIVE_VALID',
    payload
  })
}
