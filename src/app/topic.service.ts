import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Topic } from './topic.model';


@Injectable()
export class TopicService {
  topics: FirebaseListObservable<Topic[]>;

  topic: Topic;

  constructor(private db: AngularFireDatabase) {
    this.topics = db.list('topics');
  }

  getTopics() { return this.topics; }

  addTopics(newTopic: Topic) { this.topics.push(newTopic); }

  getTopicById(topicId: string) { return this.db.object('topics/' + topicId); }

  getTopicsByBoardId(boardId: string) {
    let topicList = [];

    this.topics.$ref.orderByChild("boardId").on("child_added", (snapshot) => {
      if (snapshot.val().boardId === boardId) {
        topicList.push(snapshot.val());
      }
    });

    return topicList;
  }
}
