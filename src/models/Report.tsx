export class Report {
  userId: string;
  fullname: string;
  score: number;

  constructor(obj: any) {
    this.userId = obj?.userId;
    this.fullname = obj?.fullname;
    this.score = obj?.score;
  }
}
