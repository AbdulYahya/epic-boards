import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';

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
  boardToDisplay;
  topics;
  boardId: string = null;
  topicId: string = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private boardService: BoardService,
    private topicService: TopicService
  ) { }

  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
      this.boardId = urlParameters['id'];
    });

    this.boardToDisplay = this.boardService.getBoardById(this.boardId);
    this.topics = this.topicService.getTopicsByBoardId(this.boardId);
  }

  submitForm(title: string, poster: string, createdDate: string, boardId: string) {
    let newTopic: Topic = new Topic(title, poster, createdDate, boardId);
    this.topicService.addTopics(newTopic);
  }

  // goToTopicPostList(clickedTopic: Topic) {
  //   this.router.navigate(['boards/topic/', clickedTopic.$key]);
  // }
}
