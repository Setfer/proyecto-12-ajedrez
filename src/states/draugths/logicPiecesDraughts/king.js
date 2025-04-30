export const king = (piece, board) => {
  const { row, col, color } = piece;

  const jumpMoves = [];
  const normalMoves = [];

  const diagonals = [
    { rowOffset: 1, colOffset: 1 },
    { rowOffset: 1, colOffset: -1 },
    { rowOffset: -1, colOffset: 1 },
    { rowOffset: -1, colOffset: -1 }
  ];

  diagonals.forEach(({ rowOffset, colOffset }) => {
    const targetRow = row + rowOffset;
    const targetCol = col + colOffset;

    const isInsideBoard =
      targetRow >= 0 && targetRow < 8 && targetCol >= 0 && targetCol < 8;

    if (!isInsideBoard) return;

    const targetSquare = board[targetRow][targetCol];

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
    else if (!targetSquare.piece) {
      normalMoves.push({ row: targetRow, col: targetCol });
    }
  });

  const validMoves = jumpMoves.length > 0 ? jumpMoves : normalMoves;

  return {
    rows: validMoves.map((m) => m.row),
    cols: validMoves.map((m) => m.col),
    color: color
  };
};
