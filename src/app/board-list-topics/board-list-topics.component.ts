import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Board } from '../board.model';
import { Topic } from '../topic.model';

import { BoardService } from '../board.service';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-board-list-topics',
  templateUrl: './board-list-topics.component.html',
  styleUrls: ['./board-list-topics.component.css'],
  providers: [
    BoardService,
    TopicService
  ]
})

export class BoardListTopicsComponent implements OnInit {
  topics: Topic[];
  boardToDisplay: Board;
  boardTitle: string = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private boardService: BoardService,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.boardTitle = urlParameters['title'];
    });

    this.boardToDisplay = this.boardService.getBoardByTitle(this.boardTitle);
    this.topics = this.topicService.getTopicsByBoardId(this.boardToDisplay.id);
  }

  goToTopicPostList(clickedTopic: Topic) {
    this.router.navigate(['boards/topic/', clickedTopic.title]);
  }
}
