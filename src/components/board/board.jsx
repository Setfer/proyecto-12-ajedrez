import React, { useEffect, useReducer, useState } from 'react'
import './board.css'
import { initialStateChess, reducer } from '../chess/states/chessReducer'
import Piece from '../chess/piece/piece'
import { colocarFichas } from './colocarFichas'


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

  const [fichas, dispatch] = useReducer(reducer, initialStateChess)


  useEffect(() => {
    colocarFichas(fichas, setBoard)
  }, [fichas])

  return (
    <div className='board'>
      {board.flat().map((casilla, index) => (
        <div className={casilla.color} key={index}>
   
          <p>{casilla.color}</p>
          {casilla.ficha ? (
            <Piece
            casilla={casilla}
            fichas={fichas}
            dispatch={dispatch}
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
