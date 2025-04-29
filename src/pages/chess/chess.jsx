import React, { useReducer } from 'react'

import {
  initialStateChess,
  reducerChess
} from '../../components/states/chessReducer'
import Board from '../../components/board/board'
import { selectPieceChess } from '../../components/chess/selectPieceChess'
import { movePieceChess } from '../../components/chess/movePieceChess'
import "./chess.css"

const Chess = () => {
  const [Chess, dispatchChess] = useReducer(reducerChess, initialStateChess)
  return (
    <div className='chess'>
      <p className={`turn-${Chess.turno}`} >Its {Chess.turno}`s turn</p>
      <Board
        game={Chess}
        dispatchGame={dispatchChess}
        selectPiece={selectPieceChess}
        movePiece={movePieceChess}
      />
     {Chess.winner !== null && (
        <p className={`winner-${Chess.winner}`}>
          The Winner is: {Chess.winner}
        </p>
      )}
    </div>
  )
}

export default Chess
