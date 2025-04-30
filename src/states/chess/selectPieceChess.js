import { alfil } from '../../states/chess/logicPieces/alfil'
import { caballo } from '../../states/chess/logicPieces/caballo'
import { peon } from '../../states/chess/logicPieces/peon'
import { reina } from '../../states/chess/logicPieces/reina'
import { torre } from '../../states/chess/logicPieces/torre'

export const selectPieceChess = (
  id,
  chess,
  dispatchChess,
  dispatchBoard,
  board
) => {
  const piece = chess.pieces.find((piece) => piece.id === id)
  if (!piece || chess.turn !== piece.color) return
  if (chess.winner !== null) return

  dispatchChess({
    type: 'SELECT_PIECE',
    payload: {
      id
    }
  })

  let payload

  switch (piece.type) {
    case 'peon':
      payload = peon(piece, board)
      break
    case 'alfil':
      payload = alfil(piece, board)
      break
    case 'torre':
      payload = torre(piece, board)
      break
    case 'caballo':
      payload = caballo(piece, board)
      break
    case 'reina':
      payload = reina(piece, board)
      break
    default:
      payload = {
        rows: piece.nextRows.map((row) => row + piece.row),
        cols: piece.nextCols.map((col) => col + piece.col),
        color: piece.color
      }
      break
  }

  dispatchBoard({
    type: 'ACTIVE_VALID',
    payload
  })
}
