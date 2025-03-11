import React, { useEffect, useReducer } from 'react'
import './board.css'
import {
  initialStateChess,
  reducerChess
} from '../states/reducerPieces/chessReducerPiece'
import Piece from '../chess/piece/piece'
import { colocarFichas } from './colocarFichas'
import {
  initialStateBoard,
  reducerBoard
} from '../states/reducerBoard/reducerBoard'
import { movePiece } from './movePiece'

const Board = () => {
  const [board, dispatchBoard] = useReducer(reducerBoard, initialStateBoard)
  const [fichas, dispatchPieces] = useReducer(reducerChess, initialStateChess)

  useEffect(() => {
    colocarFichas(fichas, dispatchBoard)
  }, [fichas])

  return (
    <div className='board'>
      {board.flat().map((casilla, index) => (
        <div
          onClick={() => {
            movePiece(
              casilla.col,
              casilla.row,
              fichas,
              dispatchPieces,
              dispatchBoard
            )
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
