export const initialStateChess = {
  pieces: [
    {
      id: 0,
      type: 'peon',
      img: 'public/assets/8146859.png',
      row: 1,
      col: 0,
      nextRows: [1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 1,
      type: 'ficha2',
      img: 'public/assets/pieza2.png',
      row: 0,
      col: 1,
      nextRows: [1, 4],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 2,
      type: 'peon',
      img: 'public/assets/8146859.png',
      row: 6,
      col: 0,
      nextRows: [-1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 3,
      type: 'ficha2',
      img: 'public/assets/pieza2.png',
      row: 7,
      col: 1,
      nextRows: [-1, -4],
      nextCols: [1, 1],
      active: false,
      isDelete: false,
      color: 'black'
    }
  ],
  turno: 'white'
}

export const reducerChess = (state, action) => {
  switch (action.type) {
    case 'MOVE_FICHA':
      return {
        ...state,
        pieces: state.pieces.map((piece) =>
          piece.id === action.payload.id
            ? {
                ...piece,
                row: action.payload.newRow,
                col: action.payload.newCol,
                active: false
              }
            : piece
        ),
        turno: state.turno === 'white' ? 'black' : 'white'
      }

    case 'SELECT_FICHA':
      return {
        ...state,
        pieces: state.pieces.map((piece) =>
          piece.id === action.payload.id
            ? { ...piece, active: true }
            : { ...piece, active: false }
        )
      }
    case 'DELETE_PIECE':
      return {
        ...state,
        pieces: state.pieces.filter((piece) => piece.id !== action.payload.id)
      }

    default:
      return state
  }
}
