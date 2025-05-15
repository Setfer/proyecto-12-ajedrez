import React, { useCallback } from 'react'
import './board.css'
import { useBoard } from '../../custom/useBoard'
import Square from '../square/square'



const Board = ({ game, dispatchGame, selectPiece, movePiece }) => {
  const { board, dispatchBoard } = useBoard(game, selectPiece, dispatchGame)

  const memoizedSelectPiece = useCallback(
    (id) => {
      console.log(board)
      selectPiece(id, game, dispatchGame, dispatchBoard, board)
    },
    [selectPiece, dispatchGame, dispatchBoard, board]
  )

  const memoizedMovePiece = useCallback(
    (square) => {
      movePiece(
        square.col,
        square.row,
        game.pieces,
        dispatchGame,
        dispatchBoard,
        board
      )
    },
    [movePiece, game.pieces, dispatchGame, dispatchBoard,board]
  )

  console.log('soy board')

  return (
    <div className='board'>
      {board.flat().map((square, index) => (
        <Square
          key={index}
          square={square}
          selectPiece={memoizedSelectPiece}
          movePiece={memoizedMovePiece}
        />
      ))}
    </div>
  )
}

export default Board