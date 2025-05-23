import { useReducer } from 'react'

import './draughts.css'
import {
  initialStateDraugths,
  reducerDraugths
} from '../../states/draugths/draughtsReducer'
import selectPieceDraughts from '../../states/draugths/selectPieceDraughts'
import { movePieceDraughts } from '../../states/draugths/movePieceDraughts'

import Board from '../../components/board/board'
import Reset from '../../components/butonReset/Reset'

const Draughts = () => {
  const [Draughts, dispatchDraughts] = useReducer(
    reducerDraugths,
    initialStateDraugths
  )

  return (
    <div className='draughts'>
      {Draughts.winner === null && (
        <p className={`turn-${Draughts.turn}`}>Its {Draughts.turn}`s turn</p>
      )}
      {Draughts.winner !== null && (
        <p className={`winner-${Draughts.winner}`}>
          The Winner is: {Draughts.winner}
        </p>
      )}
      <Board
        game={Draughts}
        dispatchGame={dispatchDraughts}
        selectPiece={selectPieceDraughts}
        movePiece={movePieceDraughts}
      />
      <Reset dispatchGame={dispatchDraughts} />
    </div>
  )
}

export default Draughts
