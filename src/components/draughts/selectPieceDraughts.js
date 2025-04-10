
import { man } from '../../pages/draughts/logicPiecesDraughts/man'

const selectPieceDraughts = (
  id,
  draughts,
  dispatchDraughts,
  dispatchBoard,
  board
) => {
  const piece = draughts.pieces.find((piece) => piece.id === id)
  if (!piece || draughts.turno !== piece.color) return
  if (draughts.winner !== null) return

  dispatchDraughts({
    type: 'SELECT_PIECE',
    payload: {
      id
    }
  })
  let payload
  payload= man(piece,board)

  dispatchBoard({
    type: 'ACTIVE_VALID',
    payload
  })
}

export default selectPieceDraughts
