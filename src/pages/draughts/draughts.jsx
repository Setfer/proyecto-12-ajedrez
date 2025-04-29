import { useReducer } from 'react'
import {
  initialStateDraugths,
  reducerDraugths
} from '../../components/states/draughtsReducer'
import selectPieceDraughts from '../../components/draughts/selectPieceDraughts'
import { movePieceDraughts } from '../../components/draughts/movePieceDraughts'
import './draughts.css'
import Board from '../../components/board/board'

const Draughts = () => {
  const [Draughts, dispatchDraughts] = useReducer(
    reducerDraugths,
    initialStateDraugths
  )

  return (
    <div className='draughts'>
      <p className={`turn-${Draughts.turno}`}>Its {Draughts.turno}`s turn</p>
      <Board
        game={Draughts}
        dispatchGame={dispatchDraughts}
        selectPiece={selectPieceDraughts}
        movePiece={movePieceDraughts}
      />
      {Draughts.winner !== null && (
        <p className={`winner-${Draughts.winner}`}>
          The Winner is: {Draughts.winner}
        </p>
      )}
    </div>
  )
}

export default Draughts
