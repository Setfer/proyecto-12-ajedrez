export const man = (piece, board) => {
  const { row, col, color, nextCols, nextRows } = piece

  const direction = color === 'white' ? 1 : -1

  const piezasParaComer = board
    .flat()
    .filter(
      (casilla) =>
        casilla.piece &&
        casilla.piece.color !== color &&
        casilla.row === row + direction &&
        (casilla.col === col + 1 || casilla.col === col - 1)
    )
  let newCols = nextCols.map((c) => col + c)
  let newRows = nextRows.map((r) => row + r)
  console.log(piezasParaComer)

  if (piezasParaComer.length > 0) {
    newCols = []
    newRows =[]
    piezasParaComer.forEach((p) => {
      const directionEat = p.col > col ? 2 : -2
      newCols.push(col + directionEat)
      newRows.push(row + direction * 2)
    })
    console.log(newCols,newRows)
  }

  return {
    rows: newRows,
    cols: newCols,
    color: color
  }
}
