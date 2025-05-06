import React from 'react'
import './piece.css'

const Piece = React.memo(({ id, img, onClick }) => {
  console.log('SOY PIECE' )
  return (
    <div>
      <img className='piece' src={img} onClick={() => onClick(id)} />
    </div>
  )
})

export default Piece
