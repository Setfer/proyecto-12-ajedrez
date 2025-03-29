export const torre = (piece, board) => {
  const { row, col, color, nextCols, nextRows } = piece

  const nextRowsMoves = []
  const nextColsMoves = []

  nextRows.forEach((r, index) => {
    //creamos movimientos dentro del tabler
    for (let i = 1; i <= 7; i++) {
      const newRow = r !== 0 ? row + r * i : row
      const newCol = nextCols[index] !== 0 ? col + nextCols[index] * i : col
      if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) break
      nextRowsMoves.push(newRow)
      nextColsMoves.push(newCol)
      if (board[newRow][newCol].piece) {
        break
      }
    }
  })

  return {
    rows: nextRowsMoves,
    cols: nextColsMoves,
    color
  }
}
