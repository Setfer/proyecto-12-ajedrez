export const initialStateDraugths = {
  pieces: [
    // Fichas blancas (filas 0, 1, 2)
    ...Array.from({ length: 12 }, (_, i) => {
      const row = Math.floor(i / 4)
      const col = (i % 4) * 2 + ((row + 1) % 2)
      return {
        id: i,
        type: 'man', // 'man' o 'king'
        img: 'public/assets/white_man.png',
        row,
        col,
        nextRows: [1, 1],
        nextCols: [1, -1],
        active: false,
        isDelete: false,
        color: 'white'
      }
    }),

    // Fichas negras (filas 5, 6, 7)
    ...Array.from({ length: 12 }, (_, i) => {
      const row = 5 + Math.floor(i / 4)
      const col = (i % 4) * 2 + ((row + 1) % 2)
      return {
        id: i + 12,
        type: 'man',
        img: 'public/assets/black_man.png',
        row,
        col,
        nextRows: [-1, -1],
        nextCols: [1, -1],
        active: false,
        isDelete: false,
        color: 'black'
      }
    })
  ],
  turno: 'white',
  winner: null
}

export const reducerDraugths = (state, action) => {
  switch (action.type) {
    case 'MOVE_PIECE':
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
        turno: action.payload.stayTurn
          ? state.turno
          : state.turno === 'white'
          ? 'black'
          : 'white'
      }

    case 'SELECT_PIECE':
      return {
        ...state,
        pieces: state.pieces.map((piece) =>
          piece.id === action.payload.id
            ? { ...piece, active: true }
            : { ...piece, active: false }
        )
      }
    case 'DELETE_PIECE': {
      const updatedPieces = state.pieces.map((piece) =>
        piece.id === action.payload.id ? { ...piece, isDelete: true } : piece
      )
      const pieceDeleted = state.pieces.find((p) => p.id === action.payload.id)

      const allDeleted = updatedPieces
        .filter((p) => p.color === pieceDeleted.color)
        .every((p) => p.isDelete === true)

      const newWiner =
        allDeleted === true
          ? pieceDeleted.color === 'white'
            ? 'black'
            : 'white'
          : state.winner

      return {
        ...state,
        pieces: updatedPieces,
        winner: newWiner
      }
    }

    case 'PROMOTE_MAN': {
      const updatedPieces = state.pieces.map((piece) =>
        piece.id === action.payload.id
          ? {
              ...piece,
              type: 'king',
              img:
                piece.color === 'white'
                  ? 'public/assets/white_cro.png'
                  : 'public/assets/black_cro.png'
            }
          : piece
      )
      return {
        ...state,
        pieces: updatedPieces
      }
    }
    case 'SET_WINNER': {
      return {
        ...state,
        winner: action.payload
      }
    }
  }
}
