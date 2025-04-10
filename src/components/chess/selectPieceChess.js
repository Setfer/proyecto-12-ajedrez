
import { alfil } from "./logicPieces/alfil"
import { caballo } from "./logicPieces/caballo"
import { peon } from "./logicPieces/peon"
import { reina } from "./logicPieces/reina"
import { torre } from "./logicPieces/torre"




export const selectPieceChess = (id, chess, dispatchChess, dispatchBoard, board) => {
  const piece = chess.pieces.find((piece) => piece.id === id)
  if (!piece || chess.turno !== piece.color) return
  if (chess.winner !== null) return  

  dispatchChess({
    type: 'SELECT_PIECE',
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
  } else if (piece.type === 'reina') {
    payload = reina(piece, board)
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
