export const initialStateBoard = Array.from({ length: 8 }, (_, row) =>
  Array.from({ length: 8 }, (_, col) => ({
    color: (row + col) % 2 === 0 ? 'white' : 'black',
    tieneFicha: false,
    ficha: null,
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
          const fichaEncontrada = action.payload.fichas.find(
            (ficha) => ficha.row === casilla.row && ficha.col === casilla.col
          )
          return fichaEncontrada && fichaEncontrada.isDelete ===false
            ? { ...casilla, tieneFicha: true, ficha: fichaEncontrada }
            : { ...casilla, tieneFicha: false, ficha: null }
        })
      )
    case 'ACTIVE_VALID':
      return state.map((fila) =>
        fila.map((casilla) =>
          action.payload.rows.some((row) => row === casilla.row) &&
          action.payload.cols.some((col) => col === casilla.col)
            ? { ...casilla, isValid: action.payload.isValid }
            : casilla
        )
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
