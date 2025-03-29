import { alfil } from './movesPieces/alfil'
import { caballo } from './movesPieces/caballo'
import { peon } from './movesPieces/peon'
import { torre } from './movesPieces/torre'

export const selecFicha = (id, chess, dispatchChess, dispatchBoard, board) => {
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
    payload = peon(piece, board)
  } else if (piece.type === 'alfil') {
    payload = alfil(piece, board)
  } else if (piece.type === 'torre') {
    payload = torre(piece, board)
  } else if (piece.type === 'caballo') {
    payload = caballo(piece, board)
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
