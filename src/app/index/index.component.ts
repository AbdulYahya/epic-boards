import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { Board } from '../board.model';
import { Topic } from '../topic.model';

import { BoardService } from '../board.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [BoardService]
})

export class IndexComponent implements OnInit {
  boards: FirebaseListObservable<Board[]>;
  topics: Topic[];

  constructor(private router: Router, private boardService: BoardService) { }

  ngOnInit() {
    this.boards = this.boardService.getBoards();
  }

  goToBoardTopicListPage(clickedBoard) {
    this.router.navigate(['boards/board', clickedBoard.$key]);
  }



}
