import { Injectable } from '@angular/core';

import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
  posts: Post[];

  constructor() { }

  getPosts() {
    return POSTS;
  }

  getPostsByTopicId(topicId: number) {
    this.posts = POSTS.filter((post, i, array) => {
      return (post.topicId === topicId) ? post : null;
    });

    return this.posts;
  }
}
