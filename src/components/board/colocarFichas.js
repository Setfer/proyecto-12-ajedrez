export const colocarFichas = (fichas, dispatchBoard) => {
  fichas.map((ficha) =>
    dispatchBoard({
      type: 'INSERT_PIECE',
      payload: {
        ficha: ficha,
        row: ficha.row,
        col: ficha.col,
        fichas:fichas
      }
    })
  )

}
