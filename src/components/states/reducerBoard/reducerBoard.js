export const initialStateBoard = Array.from({ length: 8 }, (_, row) =>
  Array.from({ length: 8 }, (_, col) => ({
    color: (row + col) % 2 === 0 ? 'white' : 'black',
    tieneFicha: false,
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
        fila.map((casilla) => {
          const pieceFind = action.payload.pieces.find(
            (piece) => piece.row === casilla.row && piece.col === casilla.col
          )
          return pieceFind
            ? { ...casilla, tieneFicha: true, piece: pieceFind }
            : { ...casilla, tieneFicha: false, piece: null }
        })
      )
    case 'ACTIVE_VALID':
      return state.map((fila) =>
        fila.map((casilla) => {

          const isOpponentPiece =
            casilla.piece && casilla.piece.color !== action.payload.color
          const isValidRow = action.payload.rows.includes(casilla.row)
          const isValidCol = action.payload.cols.includes(casilla.col)

          return isValidRow && isValidCol && (!casilla.piece || isOpponentPiece)
            ? { ...casilla, isValid: action.payload.isValid }
            : casilla
        })
      )

    case 'DESACTIVATE_VALID':
      return state.map((fila) =>
        fila.map((casilla) => {
          return { ...casilla, isValid: false }
        })
      )

    default:
      return state
  }
}
