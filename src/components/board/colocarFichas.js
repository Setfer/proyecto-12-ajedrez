


export const colocarFichas = (fichas, setBoard) => {
  setBoard((prevBoard) => {
    return prevBoard.map((fila, r) =>
      fila.map((casilla, c) => {
        const fichaEncontrada = fichas.find(
          (ficha) => ficha.row === r && ficha.col === c
        )
        return fichaEncontrada
          ? { ...casilla, tieneFicha: true, ficha: fichaEncontrada }
          : { ...casilla, tieneFicha: false, ficha: null }
      })
    )
  })
}