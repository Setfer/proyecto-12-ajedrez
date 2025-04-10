import { useReducer } from 'react'

import Board from '../../components/board/board'
import {
  initialStateDraugths,
  reducerDraugths
} from '../../components/states/draughtsReducer'
import selectPieceDraughts from '../../components/draughts/selectPieceDraughts'


const Draughts = () => {
  const [Draughts, dispatchDraughts] = useReducer(
    reducerDraugths,
    initialStateDraugths
  )

  return (
    <div className='draughts'>
      <Board
        game={Draughts}
        dispatchGame={dispatchDraughts}
        selectPiece={selectPieceDraughts}
      />
    </div>
  )
}

export default Draughts
