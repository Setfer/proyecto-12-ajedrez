import React, { useCallback, useReducer } from 'react'

import { movePieceChess } from '../../states/chess/movePieceChess'
import './chess.css'

import { selectPieceChess } from '../../states/chess/selectPieceChess'

import {
  initialStateChess,
  reducerChess
} from '../../states/chess/chessReducer'
import Board from '../../components/board/board'
import Reset from '../../components/butonReset/Reset'


const Chess = () => {
  console.log('soy CHESS')
  const [chess, dispatchChess] = useReducer(reducerChess, initialStateChess)


  return (
    <div className='chess'>
      {chess.winner === null && (
        <p className={`turn-${chess.turn}`}>Its {chess.turn}`s turn</p>
      )}
      {chess.winner !== null && (
        <p className={`winner-${chess.winner}`}>
          The Winner is: {chess.winner}
        </p>
      )}
      <Board
        game={chess}
        dispatchGame={dispatchChess}
        selectPiece={selectPieceChess}
        movePiece={movePieceChess}
      />

      <Reset dispatchGame={dispatchChess} />
    </div>
  )
}

export default Chess
