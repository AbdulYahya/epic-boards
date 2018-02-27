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

  getTopicByTitle(topicTitle: string) {
    for (let topic in TOPICS) {
      if (TOPICS[topic].title === topicTitle) return TOPICS[topic];
    }
  }

  getTopicsByBoardId(boardId: number) {
    this.topics = TOPICS.filter((topic, i, array) => {
      return (topic.boardId === boardId) ? topic : null;
    });

    return this.topics;
  }
}
