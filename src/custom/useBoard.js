import { useCallback, useEffect, useMemo, useReducer } from 'react'
import { initialStateBoard, reducerBoard } from '../states/board/BoardReducer'
import { setPieces } from '../states/board/setPieces'

export const useBoard = (game, selectPiece, dispatchGame) => {
  const [board, dispatchBoard] = useReducer(reducerBoard, initialStateBoard)

  const memoizedSelectPiece = useCallback(
    (id) => {
      selectPiece(id, game, dispatchGame, dispatchBoard, board)
    },
    [selectPiece, game, dispatchGame, dispatchBoard, board]
  )

  const PositionsPiecesString = useMemo(
    () => JSON.stringify(game.pieces.map((p) => ({ row: p.row, col: p.col }))),
    [game.pieces]
  )

  useEffect(() => {
    setPieces(game, dispatchBoard)
  }, [PositionsPiecesString])

  return {
    board,
    dispatchBoard,
    memoizedSelectPiece
  }
}
