import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Board } from '../board.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private router: Router) { }

  boards: Board[] = [
    new Board('Testing Board', 'This is a longer board meta with supporting text below as a natural lead-in to additional content.', 1),
    new Board('Second Testing Board', 'This is a shorted board meta with nothing of substance', 2)
  ];

  goToBoardTopicListPage(clickedBoard: Board) {
    this.router.navigate(['boards/board', clickedBoard.title]);
  }


  ngOnInit() {
  }

}
