import { Injectable } from '@angular/core';

import { Board } from './board.model';
import { BOARDS } from './mock-boards';

@Injectable()
export class BoardService {
  constructor() { }

  getBoards() {
    return BOARDS;
  }

  getBoardByTitle(boardTitle: string) {
    for (let board in BOARDS) {
      if (BOARDS[board].title === boardTitle) return BOARDS[board];
    }
  }
}
