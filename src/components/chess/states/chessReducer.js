export const initialStateChess = [
  {
    id: 0,
    type: 'ficha',
    img: 'public/assets/8146859.png',
    row: 0,
    col: 0,
    nextRow: 2,
    nextCol: 0
  },
  {
    id: 1,
    type: 'ficha2',
    img: 'public/assets/pieza2.png',
    row: 0,
    col: 1,
    nextRow: 1,
    nextCol: 0
  }
]

export const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_FICHA':
      return state.map((ficha) =>
        ficha.id === action.payload.id
          ? {
              ...ficha,
              row: action.payload.newRow,
              col: action.payload.newCol
            }
          : ficha
      )
    default:
      return state
  }
}

