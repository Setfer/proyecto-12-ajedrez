import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'
import { initialStateBoard, reducerBoard } from '../states/board/BoardReducer'
import { setPieces } from '../states/board/setPieces'
import { setPiecesInit } from './setInitPieces';

export const useBoard = (game) => {
  const [board, dispatchBoard] = useReducer(reducerBoard, initialStateBoard
  );

  useEffect(() => {
    dispatchBoard({ type: 'INSERT_PIECES', payload: game.pieces })
  }, [game.pieces])

  return {
    board,
    dispatchBoard
  };
};
