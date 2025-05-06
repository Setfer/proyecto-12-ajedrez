export const setPieces = (game,dispatchBoard ) => {
  game.pieces.map((piece) => {
    if (piece.isDelete === true) {
      return
    }
    dispatchBoard({
      type: 'INSERT_PIECE',
      payload: {
        piece: piece,
        row: piece.row,
        col: piece.col,
        pieces: game.pieces
      }
    })
  })
}