import React, { useEffect, useReducer, useState } from 'react'
import './board.css'
import { initialStateChess, reducer } from '../chess/states/chessReducerPiece'
import Piece from '../chess/piece/piece'
import { colocarFichas } from './colocarFichas'



const initialStateBoard = Array.from({length :8 }, (_, row)=>Array.from({length:8}, (_,col)=>({
  color: (row + col) % 2 === 0 ? 'white' : 'black',
  tieneFicha: false,
  ficha: null,
  row: row,
  col: col,
  isValid: false
})))


const Board = () => {

  const [board, setBoard] = useState(
    Array.from({ length: 8 }, (_, row) =>
      Array.from({ length: 8 }, (_, col) => ({
        color: (row + col) % 2 === 0 ? 'white' : 'black',
        tieneFicha: false,
        ficha: null,
        row: row,
        col: col,
        isValid: false
      }))
    )

  )

 



  const [fichas, dispatch] = useReducer(reducer, initialStateChess)

  const moverFicha = (colBoard, rowBoard) => {
    const ficha = fichas.find((ficha) => ficha.active === true)
    if (!ficha) return
    const newRow = ficha.row + ficha.nextRow
    const newCol = ficha.col
    if (rowBoard !== newRow) return
    if (newRow < 8) {
      dispatch({
        type: 'MOVE_FICHA',
        payload: {
          id: ficha.id,
          newRow: newRow,
          newCol: newCol,
          active: false
        }
      })
    }
  }

  useEffect(() => {
    colocarFichas(fichas, setBoard)
    console.log(board)
    
  }, [fichas])

  return (
    <div className='board'>
      {board.flat().map((casilla, index) => (
        <div
          onClick={() => {
            moverFicha(casilla.col, casilla.row)
          }}
          className={`${casilla.color} ${casilla.isValid ===true ? "active":""}`}
          key={index}
        >
          <p>{casilla.color}</p>
          {casilla.ficha ? (
            <Piece casilla={casilla} fichas={fichas} dispatch={dispatch} setBoard={setBoard}/>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  )
}

export default Board
