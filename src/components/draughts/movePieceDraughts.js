import { king } from "./logicPiecesDraughts/king"
import { man } from "./logicPiecesDraughts/man"



export const movePieceDraughts = (
  colBoard,
  rowBoard,
  pieces,
  dispatchDraughts,
  dispatchBoard,
  board
) => {
  const piece = pieces.find((p) => p.active === true)
  if (!piece) return
  if (!board[rowBoard][colBoard].isValid) return

  const rowDiff = rowBoard - piece.row
  const colDiff = colBoard - piece.col
  const isJump = Math.abs(rowDiff) === 2 && Math.abs(colDiff) === 2

  const getPossibleJumps = (p, board) => {
    const result = p.type === 'king' ? king(p, board) : man(p, board)
  
    return result.rows
      .map((r, i) => {
        const rowDiff = r - p.row
        const colDiff = result.cols[i] - p.col
  
        return Math.abs(rowDiff) === 2 && Math.abs(colDiff) === 2
          ? [rowDiff, colDiff]
          : null
      })
      .filter(Boolean) // elimina los null
  }
  

  if (isJump) {
    const midRow = piece.row + rowDiff / 2
    const midCol = piece.col + colDiff / 2
    const jumpedPiece = board[midRow][midCol].piece

    if (jumpedPiece && jumpedPiece.color !== piece.color) {
      dispatchDraughts({
        type: 'DELETE_PIECE',
        payload: { id: jumpedPiece.id }
      })
    }
  }
  // Recalculamos si puede volver a saltar desde la nueva posición
  const updatedPiece = {
    ...piece,
    row: rowBoard,
    col: colBoard
  }

  const moreJumps = getPossibleJumps(updatedPiece, board)

  const stayTurn = isJump && moreJumps.length > 0

  dispatchDraughts({
    type: 'MOVE_PIECE',
    payload: {
      id: piece.id,
      newRow: rowBoard,
      newCol: colBoard,
      stayTurn
    }
  })

  // Promoción a dama
  const lastRow = piece.color === 'white' ? 7 : 0
  const becameKing = piece.type === 'man' && rowBoard === lastRow

  if (becameKing) {
    dispatchDraughts({
      type: 'PROMOTE_MAN',
      payload: { id: piece.id }
    })
    dispatchBoard({ type: 'DESACTIVATE_VALID' })
    return // ya no puede saltar más
  }

  if (isJump && moreJumps.length > 0) {
    // Mantener activa la ficha y calcular nuevas casillas válidas
    dispatchDraughts({
      type: 'SELECT_PIECE',
      payload: { id: piece.id }
    })

    const validMoves = moreJumps.map(([dRow, dCol]) => ({
      row: rowBoard + dRow,
      col: colBoard + dCol
    }))

    dispatchBoard({
      type: 'ACTIVE_VALID',
      payload: {
        rows: validMoves.map((m) => m.row),
        cols: validMoves.map((m) => m.col),
        color: piece.color
      }
    })
  } else {
    dispatchBoard({ type: 'DESACTIVATE_VALID' })
  }
}
