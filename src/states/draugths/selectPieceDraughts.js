import { man } from '../../states/draugths/logicPiecesDraughts/man'
import { king } from '../../states/draugths/logicPiecesDraughts/king' 

const selectPieceDraughts = (
  id,
  draughts,
  dispatchDraughts,
  dispatchBoard,
  board
) => {
  const piece = draughts.pieces.find((p) => p.id === id)
  if (!piece || draughts.turn !== piece.color || draughts.winner !== null)
    return

  const getMoves = (p) => (p.type === 'king' ? king(p, board) : man(p, board))

  const playerPieces = draughts.pieces.filter(
    (p) => p.color === draughts.turn && !p.isDelete
  )

// Verificar si el jugador actual tiene movimientos
  const canMove = playerPieces.some((p) => {
    const result = getMoves(p)
    return result.rows.length > 0 // si tiene al menos un movimiento valido
  })

  if (!canMove) {
    // Si no puede mover gana el color contrario
    const rivalColor = draughts.turn === 'white' ? 'black' : 'white'
    dispatchDraughts({
      type: 'SET_WINNER',
      payload: rivalColor
    })
    return
  }

  // Si si puede mover seguimos 
  const piecesThatCanJump = playerPieces.filter((p) => {
    const result = getMoves(p)
    return result.rows.some((r, i) => Math.abs(r - p.row) === 2)
  })

  const thisPieceMoves = getMoves(piece)
  const thisPieceCanJump = thisPieceMoves.rows.some(
    (r, i) => Math.abs(r - piece.row) === 2
  )

  if (piecesThatCanJump.length > 0 && !thisPieceCanJump) return

  dispatchDraughts({
    type: 'SELECT_PIECE',
    payload: { id }
  })

  dispatchBoard({
    type: 'ACTIVE_VALID',
    payload: thisPieceMoves
  })
}

export default selectPieceDraughts
