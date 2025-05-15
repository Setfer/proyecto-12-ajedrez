export const setPiecesInit = (pieces, boardTemplate) => {

  const newBoard = boardTemplate.map((row) =>
    row.map((square) => ({ ...square, piece: null, isValid: false }))
  )

  // Colocamos cada pieza en su posicion
  pieces.forEach((piece) => {
    const { row, col } = piece
    if (newBoard[row] && newBoard[row][col]) {
      newBoard[row][col].piece = piece
    }
  })

  return newBoard
}
