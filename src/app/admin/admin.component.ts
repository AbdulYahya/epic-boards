import { Component, OnInit } from '@angular/core';

import { Board } from '../board.model';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BoardService]
})

export class AdminComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  submitForm(title: string, meta: string) {
    let newBoard: Board = new Board(title, meta);
    this.boardService.addBoards(newBoard);
  }
}
