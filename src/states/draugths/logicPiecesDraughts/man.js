export const man = (piece, board) => {
  const { row, col, color } = piece;

  const direction = color === 'white' ? 1 : -1;
  const jumpMoves = [];
  const normalMoves = [];

  const diagonals = [
    { rowOffset: direction, colOffset: 1 },
    { rowOffset: direction, colOffset: -1 }
  ];

  diagonals.forEach(({ rowOffset, colOffset }) => {
    const targetRow = row + rowOffset;
    const targetCol = col + colOffset;

    const isInsideBoard =
      targetRow >= 0 && targetRow < 8 && targetCol >= 0 && targetCol < 8;

    if (!isInsideBoard) return;

    const targetSquare = board[targetRow][targetCol];

    // Si hay una pieza enemiga, intento salto
    if (
      targetSquare.piece &&
      targetSquare.piece.color !== color &&
      !targetSquare.piece.isDelete
    ) {
      const jumpRow = row + rowOffset * 2;
      const jumpCol = col + colOffset * 2;

      const canJump =
        jumpRow >= 0 &&
        jumpRow < 8 &&
        jumpCol >= 0 &&
        jumpCol < 8 &&
        !board[jumpRow][jumpCol].piece;

      if (canJump) {
        jumpMoves.push({ row: jumpRow, col: jumpCol });
      }
    }
    // Si no hay nada, guardo como posible movimiento normal
    else if (!targetSquare.piece) {
      normalMoves.push({ row: targetRow, col: targetCol });
    }
  });

  // Si hay saltos disponibles, los devuelve como única opción válida
  const validMoves = jumpMoves.length > 0 ? jumpMoves : normalMoves;

  return {
    rows: validMoves.map((m) => m.row),
    cols: validMoves.map((m) => m.col),
    color: color
  };
};
