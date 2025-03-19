import { peon } from './movesPieces/peon'

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
    payload = peon(chess, piece)
  } else {
    payload = {
      rows: piece.nextRows.map((row) => row + piece.row),
      cols: piece.nextCols.map((col) => col + piece.col),
      color: piece.color
    }
  }

  dispatchBoard({
    type: 'ACTIVE_VALID',
    payload
  })
}
