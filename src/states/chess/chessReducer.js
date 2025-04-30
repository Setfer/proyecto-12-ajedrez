export const initialStateChess = {
  pieces: [
    {
      id: 0,
      type: 'peon',
      img: 'public/assets/peon blanco.png',
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
      type: 'peon',
      img: 'public/assets/peon blanco.png',
      row: 1,
      col: 1,
      nextRows: [1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 2,
      type: 'peon',
      img: 'public/assets/peon blanco.png',
      row: 1,
      col: 2,
      nextRows: [1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 3,
      type: 'peon',
      img: 'public/assets/peon blanco.png',
      row: 1,
      col: 3,
      nextRows: [1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 4,
      type: 'peon',
      img: 'public/assets/peon blanco.png',
      row: 1,
      col: 4,
      nextRows: [1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 5,
      type: 'peon',
      img: 'public/assets/peon blanco.png',
      row: 1,
      col: 5,
      nextRows: [1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 6,
      type: 'peon',
      img: 'public/assets/peon blanco.png',
      row: 1,
      col: 6,
      nextRows: [1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 7,
      type: 'peon',
      img: 'public/assets/peon blanco.png',
      row: 1,
      col: 7,
      nextRows: [1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'white'
    },

    {
      id: 8,
      type: 'peon',
      img: 'public/assets/peon negro.png',
      row: 6,
      col: 0,
      nextRows: [-1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 9,
      type: 'peon',
      img: 'public/assets/peon negro.png',
      row: 6,
      col: 1,
      nextRows: [-1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 10,
      type: 'peon',
      img: 'public/assets/peon negro.png',
      row: 6,
      col: 2,
      nextRows: [-1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 11,
      type: 'peon',
      img: 'public/assets/peon negro.png',
      row: 6,
      col: 3,
      nextRows: [-1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 12,
      type: 'peon',
      img: 'public/assets/peon negro.png',
      row: 6,
      col: 4,
      nextRows: [-1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 13,
      type: 'peon',
      img: 'public/assets/peon negro.png',
      row: 6,
      col: 5,
      nextRows: [-1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 14,
      type: 'peon',
      img: 'public/assets/peon negro.png',
      row: 6,
      col: 6,
      nextRows: [-1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 15,
      type: 'peon',
      img: 'public/assets/peon negro.png',
      row: 6,
      col: 7,
      nextRows: [-1, 0],
      nextCols: [0, 0],
      active: false,
      isDelete: false,
      color: 'black'
    },

    {
      id: 16,
      type: 'torre',
      img: 'public/assets/torre blanca.png',
      row: 0,
      col: 0,
      nextRows: [1, 0, -1, 0],
      nextCols: [0, 1, 0, -1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 17,
      type: 'torre',
      img: 'public/assets/torre blanca.png',
      row: 0,
      col: 7,
      nextRows: [1, 0, -1, 0],
      nextCols: [0, 1, 0, -1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 18,
      type: 'torre',
      img: 'public/assets/torre negra.png',
      row: 7,
      col: 0,
      nextRows: [1, 0, -1, 0],
      nextCols: [0, 1, 0, -1],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 19,
      type: 'torre',
      img: 'public/assets/torre negra.png',
      row: 7,
      col: 7,
      nextRows: [1, 0, -1, 0],
      nextCols: [0, 1, 0, -1],
      active: false,
      isDelete: false,
      color: 'black'
    },

    {
      id: 20,
      type: 'caballo',
      img: 'public/assets/caballo blanco.png',
      row: 0,
      col: 1,
      nextRows: [1, 1, -1, -1, 2, 2, -2, -2],
      nextCols: [2, -2, 2, -2, 1, -1, 1, -1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 21,
      type: 'caballo',
      img: 'public/assets/caballo blanco.png',
      row: 0,
      col: 6,
      nextRows: [1, 1, -1, -1, 2, 2, -2, -2],
      nextCols: [2, -2, 2, -2, 1, -1, 1, -1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 22,
      type: 'caballo',
      img: 'public/assets/caballo negro.png',
      row: 7,
      col: 1,
      nextRows: [1, 1, -1, -1, 2, 2, -2, -2],
      nextCols: [2, -2, 2, -2, 1, -1, 1, -1],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 23,
      type: 'caballo',
      img: 'public/assets/caballo negro.png',
      row: 7,
      col: 6,
      nextRows: [1, 1, -1, -1, 2, 2, -2, -2],
      nextCols: [2, -2, 2, -2, 1, -1, 1, -1],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 24,
      type: 'alfil',
      img: 'public/assets/alfil blanco.png',
      row: 0,
      col: 2,
      nextRows: [1, -1, 1, -1],
      nextCols: [1, -1, -1, 1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 25,
      type: 'alfil',
      img: 'public/assets/alfil blanco.png',
      row: 0,
      col: 5,
      nextRows: [1, -1, 1, -1],
      nextCols: [1, -1, -1, 1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 26,
      type: 'alfil',
      img: 'public/assets/alfil negro.png',
      row: 7,
      col: 2,
      nextRows: [1, -1, 1, -1],
      nextCols: [1, -1, -1, 1],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 27,
      type: 'alfil',
      img: 'public/assets/alfil negro.png',
      row: 7,
      col: 5,
      nextRows: [1, -1, 1, -1],
      nextCols: [1, -1, -1, 1],
      active: false,
      isDelete: false,
      color: 'black'
    },

    {
      id: 28,
      type: 'reina',
      img: 'public/assets/reina blanca.png',
      row: 0,
      col: 3,
      nextRows: [1, 0, -1, 0, 1, -1, 1, -1],
      nextCols: [0, 1, 0, -1, 1, -1, -1, 1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 29,
      type: 'reina',
      img: 'public/assets/reina negra.png',
      row: 7,
      col: 3,
      nextRows: [1, 0, -1, 0, 1, -1, 1, -1],
      nextCols: [0, 1, 0, -1, 1, -1, -1, 1],
      active: false,
      isDelete: false,
      color: 'black'
    },
    {
      id: 30,
      type: 'rey',
      img: 'public/assets/rey blanco.png',
      row: 0,
      col: 4,
      nextRows: [1, 0, -1, 0, 1, -1, 1, -1],
      nextCols: [0, 1, 0, -1, 1, -1, -1, 1],
      active: false,
      isDelete: false,
      color: 'white'
    },
    {
      id: 31,
      type: 'rey',
      img: 'public/assets/rey negro.png',
      row: 7,
      col: 4,
      nextRows: [1, 0, -1, 0, 1, -1, 1, -1],
      nextCols: [0, 1, 0, -1, 1, -1, -1, 1],
      active: false,
      isDelete: false,
      color: 'black'
    }
  ],
  turn: 'white',
  winner: null
}

export const reducerChess = (state, action) => {
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
        turn: state.turn === 'white' ? 'black' : 'white'
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

      // Buscar la pieza eliminada
      const deletedPiece = state.pieces.find(
        (piece) => piece.id === action.payload.id
      )

      // Si la pieza eliminada es un rey gana el color contrario
      const newWinner =
        deletedPiece?.type === 'rey'
          ? deletedPiece.color === 'white'
            ? 'black'
            : 'white'
          : state.winner

      return {
        ...state,
        pieces: updatedPieces,
        winner: newWinner
      }
    }

    case 'UPDATE_PAWN':
      return {
        ...state,
        pieces: state.pieces.map((piece) =>
          piece.id === action.payload.id
            ? {
                ...piece,
                type: 'reina',
                img:
                  piece.color === 'black'
                    ? 'public/assets/reina negra.png'
                    : 'public/assets/reina blanca.png',
                nextRows: [1, 0, -1, 0, 1, -1, 1, -1],
                nextCols: [0, 1, 0, -1, 1, -1, -1, 1]
              }
            : piece
        )
      }

      case "RESET_GAME":
        return initialStateChess

    default:
      return state
  }
}
