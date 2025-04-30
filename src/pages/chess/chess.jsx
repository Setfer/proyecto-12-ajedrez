import React, { useReducer } from 'react'

import { movePieceChess } from '../../states/chess/movePieceChess'
import './chess.css'
import Board from '../../components/board/Board'
import {
  initialStateChess,
  reducerChess
} from '../../states/chess/chessReducer'
import { selectPieceChess } from '../../states/chess/selectPieceChess'
import Reset from '../../components/butonReset/reset'

const Chess = () => {
  const [Chess, dispatchChess] = useReducer(reducerChess, initialStateChess)
  return (
    <div className='chess'>
      {Chess.winner === null && (
        <p className={`turn-${Chess.turn}`}>Its {Chess.turn}`s turn</p>
      )}
      {Chess.winner !== null && (
        <p className={`winner-${Chess.winner}`}>
          The Winner is: {Chess.winner}
        </p>
      )}
      <Board
        game={Chess}
        dispatchGame={dispatchChess}
        selectPiece={selectPieceChess}
        movePiece={movePieceChess}
      />

      <Reset dispatchGame={dispatchChess} />
    </div>
  )
}

export default Chess
