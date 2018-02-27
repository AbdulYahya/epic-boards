import { Injectable } from '@angular/core';

import { Topic } from './topic.model';
import { TOPICS } from './mock-topics';

@Injectable()
export class TopicService {
  topics: Topic[];

  constructor() { }

  getTopics() {
    return TOPICS;
  }

  getTopicsByBoardId(boardId: number) {
    this.topics = TOPICS.filter((topic, i, array) => {
      // return topic;
      return (topic.boardId === boardId) ? topic : null;
    });
    console.log(this.topics);
    return this.topics;
    // for (let topic in TOPICS) {
    //   if (TOPICS[topic].boardId === boardId) return TOPICS[topic];
    // }
  }
}
