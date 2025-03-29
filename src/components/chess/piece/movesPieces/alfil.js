export const alfil = (piece, board) => {
  const { row, col, color, nextCols, nextRows } = piece

  const nextRowsMoves = []
  const nextColsMoves = []

  nextRows.forEach((r, index) => {
    //creamos movimientos dentro del tabler
    for (let i = 1; i <= 7; i++) {
      const newRow = row + r * i
      const newCol = col + nextCols[index] * i
      nextRowsMoves.push(newRow)
      nextColsMoves.push(newCol)
      if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) break
      //en caso de haber una ficha, bloquear el paso
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
