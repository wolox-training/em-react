export function calculateWinner(squares, winningMoves) {
  let winner;
  winningMoves.forEach(line => {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
    }
  });
  return winner;
}

export const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
