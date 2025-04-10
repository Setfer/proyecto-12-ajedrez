import React, { useReducer } from 'react'

import { initialStateChess, reducerChess } from '../../components/states/chessReducer'
import Board from '../../components/board/board'
import { selectPieceChess } from '../../components/chess/selectPieceChess'




const Chess = () => {
  const [Chess, dispatchChess] = useReducer(reducerChess, initialStateChess)
  return (
    <div className='chess'>
      <p>Its {Chess.turno}`s turn</p>
      <Board game={Chess} dispatchGame={dispatchChess} selectPiece={selectPieceChess} />
      {Chess.winner !== null && <p>The Winner is : {Chess.winner}</p>}
    </div>
  )
}

export default Chess
