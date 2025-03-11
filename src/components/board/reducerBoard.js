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
          return fichaEncontrada
            ? { ...casilla, tieneFicha: true, ficha: fichaEncontrada }
            : { ...casilla, tieneFicha: false, ficha: null }
        })
      )
    case 'ACTIVE_VALID':
      return state.map((fila) =>
        fila.map((casilla) => 
          casilla.row === action.payload.row &&
          casilla.col === action.payload.col
            ? {...casilla, isValid: action.payload.isValid}
            : {...casilla, isValid:false}
        )
      )

    default:
      return state
  }
}
