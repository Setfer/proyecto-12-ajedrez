import React, {  } from "react"
import Piece from "../Piece/Piece"



const Square = React.memo(({ square, selectPiece, movePiece }) => {


  return (
    <div
      onClick={()=>movePiece(square)}
      className={`${square.color} ${square.isValid === true ? 'valid-move' : ''}`}
    >
      {square.piece && (
        <Piece
          id={square.piece.id}
          img={square.piece.img}
          onClick={selectPiece}
        />
      )}
    </div>
  )
})

export default Square