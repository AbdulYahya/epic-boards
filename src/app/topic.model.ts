import { BoardService } from './board.service';

export class Topic {
  constructor(
    public title: string,
    public poster: string,
    public createdDate: string,
    public boardId: string
  ) {

  }
}
