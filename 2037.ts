function minMovesToSeat(seats: number[], students: number[]): number {
  let moves = 0;
  seats = seats.sort((a, b) => b - a);
  students = students.sort((a, b) => b - a);

  seats.forEach((a, b) => (moves = moves + Math.abs(a - students[b])));

  return moves;
}

minMovesToSeat([12, 14, 19, 19, 12], [19, 2, 17, 20, 7]);
