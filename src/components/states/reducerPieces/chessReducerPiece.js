export const initialStateChess = {
  pieces: [
    {
      id: 0,
      type: 'peon',
      img: 'public/assets/8146859.png',
      row: 1,
      col: 1,
      nextRows: [1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 1,
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
      id: 2,
      type: 'alfil',
      img: 'public/assets/pieza2.png',
      row: 0,
      col: 2,
      nextRows: [1, -1, 1, -1],
      nextCols: [1, -1, -1, 1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 3,
      type: 'alfil',
      img: 'public/assets/pieza2.png',
      row: 3,
      col: 1,
      nextRows: [1, -1, 1, -1],
      nextCols: [1, -1, -1, 1],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 4,
      type: 'torre',
      img: 'public/assets/37869.png',
      row: 0,
      col: 3,
      nextRows: [1, 0, -1, 0],
      nextCols: [0, 1, 0, -1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 5,
      type: 'torre',
      img: 'public/assets/37869.png',
      row: 7,
      col: 3,
      nextRows: [1, 0, -1, 0],
      nextCols: [0, 1, 0, -1],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 6,
      type: 'caballo',
      img: 'public/assets/36209.png',
      row: 0,
      col: 4,
      nextRows: [1, 1, -1, -1, 2, 2, -2, -2],
      nextCols: [2, -2, 2, -2, 1, -1, 1, -1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 7,
      type: 'caballo',
      img: 'public/assets/36209.png',
      row: 7,
      col: 4,
      nextRows: [1, 1, -1, -1, 2, 2, -2, -2],
      nextCols: [2, -2, 2, -2, 1, -1,1, -1],
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
