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
  const [Chess, dispatchChess] = useReducer(reducerChess, initialStateChess)

  useEffect(() => {
    colocarFichas(Chess, dispatchBoard)
  }, [Chess.pieces])

  return (
    <div className='board'>
      {board.flat().map((casilla, index) => (
        <div
          onClick={() => {
            movePiece(
              casilla.col,
              casilla.row,
              Chess.pieces,
              dispatchChess,
              dispatchBoard,
              board
            )
          }}
          className={`${casilla.color} ${
            casilla.isValid === true ? 'active' : ''
          }`}
          key={index}
        >
          <p>{casilla.color}</p>
          {casilla.piece ? (
            <Piece
              casilla={casilla}
              chess={Chess}
              dispatchChess={dispatchChess}
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
