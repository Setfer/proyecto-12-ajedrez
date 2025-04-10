export const movePiece = (
  colBoard,
  rowBoard,
  pieces,
  dispatchChess,
  dispatchBoard,
  board
) => {
  const piece = pieces.find((piece) => piece.active === true)
  if (!piece) {
    return
  }
  if (!board[rowBoard][colBoard].isValid) return
  if (
    board[rowBoard][colBoard].piece &&
    board[rowBoard][colBoard].piece.color !== piece.color
  ) {
    dispatchChess({
      type: 'DELETE_PIECE',
      payload: {
        id: board[rowBoard][colBoard].piece.id
      }
    })
  }

  dispatchChess({
    type: 'MOVE_PIECE',
    payload: {
      id: piece.id,
      newRow: rowBoard,
      newCol: colBoard
    }
  })

  const lasRow = piece.color === 'white' ? 7 : 0
  if (piece.type === 'peon' && rowBoard === lasRow) {
    dispatchChess({
      type: 'UPDATE_PAWN',
      payload: {
        id: piece.id
      }
    })
  }

  dispatchBoard({
    type: 'DESACTIVATE_VALID'
  })
}
