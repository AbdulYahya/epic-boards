export class Post {
  constructor(
    public poster: string,
    public postedDate: string,
    public postContent: string,
    public topicId: number,
    public id: number
  ) {}
}
