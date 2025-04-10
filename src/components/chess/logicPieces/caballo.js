export const caballo = (piece, board) => {
  const { nextRows, nextCols, row, col, color } = piece
  const nextRowsMoves = []
  const nextColsMoves = []

  nextRows.forEach((r, index) => {
    const newRow = r + row
    const newCol = nextCols[index]+ col
    console.log(newRow, newCol)
    if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) {return}
    nextRowsMoves.push(newRow)
    nextColsMoves.push(newCol)
  })
  return {

    rows: nextRowsMoves,
    cols: nextColsMoves,
    color
  }
}
