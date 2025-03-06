import React, { useEffect, useReducer, useState } from 'react'
import './board.css'

const initialState = [
  {
    id: 0,
    type: 'ficha',
    img: 'public/assets/8146859.png',
    row: 0,
    col: 0,
    nextRow: 1,
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

const reducer = (state, action) => {
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

const Board = () => {
  const [board, setBoard] = useState(
    Array.from({ length: 8 }, (_, row) =>
      Array.from({ length: 8 }, (_, col) => ({
        color: (row + col) % 2 === 0 ? 'white' : 'black',
        tieneFicha: false,
        ficha: null,
        row: row,
        col: col
      }))
    )
  )

  const [fichas, dispatch] = useReducer(reducer, initialState)

  const colocarFicha = (fichas) => {
    setBoard((prevBoard) => {
      return prevBoard.map((fila, r) =>
        fila.map((casilla, c) => {
          const fichaEncontrada = fichas.find(
            (ficha) => ficha.row === r && ficha.col === c
          )
          return fichaEncontrada
            ? { ...casilla, tieneFicha: true, ficha: fichaEncontrada }
            : { ...casilla, tieneFicha: false, ficha: null }
        })
      )
    })
  }

  const moverFicha = (id) => {
    const ficha = fichas.find((ficha) => ficha.id === id)
    if (!ficha) return

    const newRow = ficha.row + 1
    if (newRow < 8) {
      dispatch({
        type: 'MOVE_FICHA',
        payload: {
          id,
          newRow,
          newCol: ficha.col
        }
      })
    }
  }


  useEffect(() => {
    colocarFicha(fichas)
  }, [fichas])

  return (
    <div className='board'>
      {board.flat().map((casilla, index) => (
        <div className={casilla.color} key={index}>
          {console.log('ueeeeeeeeeee')}
          <p>{casilla.color}</p>
          {casilla.ficha ? (
            <img
              onClick={() => moverFicha(casilla.ficha.id)}
              className='ficha'
              src={casilla.ficha.img}
            />
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  )
}

export default Board
