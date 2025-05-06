import React, { useCallback, useReducer } from 'react'

import { movePieceChess } from '../../states/chess/movePieceChess'
import './chess.css'
import Board from '../../components/board/Board'
import { selectPieceChess } from '../../states/chess/selectPieceChess'
import Reset from '../../components/butonReset/reset'
import {
  initialStateChess,
  reducerChess
} from '../../states/chess/chessReducer'


const Chess = () => {
  console.log('soy CHESS')
  const [Chess, dispatchChess] = useReducer(reducerChess, initialStateChess)


  const memoizedSelectPieceChess = useCallback(
    (id, game, dispatchGame, dispatchBoard, board) => {
      selectPieceChess(id, game, dispatchGame, dispatchBoard, board)
    },
    []
  )

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
        selectPiece={memoizedSelectPieceChess}
        movePiece={movePieceChess}
      />

      <Reset dispatchGame={dispatchChess} />
    </div>
  )
}

export default Chess
