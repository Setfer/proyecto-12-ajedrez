export const initialStateBoard = Array.from({ length: 8 }, (_, row) =>
  Array.from({ length: 8 }, (_, col) => ({
    color: (row + col) % 2 === 0 ? 'white' : 'black',
    hasPiece: false,
    piece: null,
    row: row,
    col: col,
    isValid: false
  }))
)

export const reducerBoard = (state, action) => {
  switch (action.type) {
    case `INSERT_PIECE`:
      return state.map((fila) =>
        fila.map((square) => {
          const pieceFind = action.payload.pieces.find(
            (piece) =>
              piece.row === square.row &&
              piece.col === square.col &&
              piece.isDelete === false
          )
          return pieceFind
            ? { ...square, hasPiece: true, piece: pieceFind }
            : { ...square, hasPiece: false, piece: null }
        })
      )
    case 'ACTIVE_VALID':
      return state.map((fila) =>
        fila.map((square) => {
          const isOpponentPiece =
            square.piece && square.piece.color !== action.payload.color
          const isValid = action.payload.rows.some(
            (row, index) =>
              row === square.row && action.payload.cols[index] === square.col
          )
          return isValid && (!square.piece || isOpponentPiece)
            ? { ...square, isValid: true }
            : { ...square, isValid: false }
        })
      )

    case 'DESACTIVATE_VALID':
      return state.map((fila) =>
        fila.map((square) => {
          return { ...square, isValid: false }
        })
      )

    default:
      return state
  }
}
