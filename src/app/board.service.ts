import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Board } from './board.model';

@Injectable()
export class BoardService {
  boards: FirebaseListObservable<Board[]>;
  board: Board;

  constructor(private db: AngularFireDatabase) {
    this.boards = db.list('boards');
  }

  getBoards() {
    return this.boards;
  }

  addBoards(newBoard: Board) {
    this.boards.push(newBoard);
  }


  getBoardById(boardId: string) {
    return this.db.object('boards/' + boardId);
  }

  // getBoardByTitle(boardTitle: string) {
  //   for (let board in BOARDS) {
  //     if (BOARDS[board].title === boardTitle) return BOARDS[board];
  //   }
  // }
}
