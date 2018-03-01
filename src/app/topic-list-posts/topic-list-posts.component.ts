import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Board } from '../board.model';
import { Topic } from '../topic.model';
import { Post } from '../post.model';

import { BoardService } from '../board.service';
import { TopicService } from '../topic.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-topic-list-posts',
  templateUrl: './topic-list-posts.component.html',
  styleUrls: ['./topic-list-posts.component.css'],
  providers: [
    BoardService,
    TopicService,
    PostService
  ]
})

export class TopicListPostsComponent implements OnInit {
  posts: Post[];
  topicToDisplay: Topic;
  boardTitle: string = null;
  topicTitle: string = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private boardService: BoardService,
    private topicService: TopicService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.topicTitle = urlParameters['title'];
    });

    this.topicToDisplay = this.topicService.getTopicByTitle(this.topicTitle);
    let board = this.boardService.getBoardById(this.topicToDisplay.boardId);
    this.boardTitle = board.title;
    console.log(this.boardTitle);
    this.posts = this.postService.getPostsByTopicId(this.topicToDisplay.id);
  }


}
