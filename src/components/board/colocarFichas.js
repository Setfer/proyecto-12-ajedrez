export const colocarFichas = (chess, dispatchBoard) => {

  console.log(chess)

  chess.pieces.map((piece) =>
    dispatchBoard({
      type: 'INSERT_PIECE',
      payload: {
        piece: piece,
        row: piece.row,
        col: piece.col,
        pieces:chess.pieces
      }
    })
  )

}
