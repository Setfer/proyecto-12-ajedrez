import React, { useEffect, useReducer, useState } from 'react'
import './board.css'
import { initialStateChess, reducer } from '../chess/states/chessReducerPiece'
import Piece from '../chess/piece/piece'
import { colocarFichas } from './colocarFichas'
import { initialStateBoard, reducerBoard } from './reducerBoard'

const Board = () => {

  
  const [board, dispatchBoard] = useReducer(reducerBoard, initialStateBoard)
  const [fichas, dispatchPieces] = useReducer(reducer, initialStateChess)

  const moverFicha = (colBoard, rowBoard) => {
    const ficha = fichas.find((ficha) => ficha.active === true)
    if (!ficha) return
    const newRow = ficha.row + ficha.nextRow
    const newCol = ficha.col + ficha.nextCol
    if (rowBoard !== newRow) return
    if (colBoard !== newCol) return
    if (newRow < 8) {
      dispatchPieces({
        type: 'MOVE_FICHA',
        payload: {
          id: ficha.id,
          newRow: newRow,
          newCol: newCol
        }
      })
      dispatchBoard({
        type: 'DESACTIVATE_VALID'
      })
    }
  }

  useEffect(() => {
    colocarFichas(fichas, dispatchBoard)
  }, [fichas])

  return (
    <div className='board'>
      {board.flat().map((casilla, index) => (
        <div
          onClick={() => {
            moverFicha(casilla.col, casilla.row)
          }}
          className={`${casilla.color} ${
            casilla.isValid === true ? 'active' : ''
          }`}
          key={index}
        >
          <p>{casilla.color}</p>
          {casilla.ficha ? (
            <Piece
              casilla={casilla}
              fichas={fichas}
              dispatchPieces={dispatchPieces}
              dispatchBoard={dispatchBoard}
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
