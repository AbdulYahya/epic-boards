import { Injectable } from '@angular/core';

import { Board } from './board.model';
import { BOARDS } from './mock-boards';

@Injectable()
export class BoardService {
  board: Board;

  constructor() { }

  getBoards() {
    return BOARDS;
  }

  getBoardById(boardId: number) {
    for (let board in BOARDS) {
      if (BOARDS[board].id === boardId) return BOARDS[board];
    }
  }

  getBoardByTitle(boardTitle: string) {
    for (let board in BOARDS) {
      if (BOARDS[board].title === boardTitle) return BOARDS[board];
    }
  }
}
