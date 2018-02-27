import { Board } from './board.model';
import { TOPICS } from './mock-topics';

export const BOARDS: Board[] = [
  new Board(
    'Testing Board',
    'This is a longer board meta with supporting text below as a natural lead-in to additional content.',
    1
  ),
  new Board(
    'Second Testing Board',
    'This is a shorted board meta with nothing of substance',
    2
  )
];
