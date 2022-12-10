export class Challenge {
  _id: string;
  subjectId: string;
  title: string;
  passingScore: number;
  attemptLimit: number;
  difficulty: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this._id = obj._id;
    this.subjectId = obj.subjectId;
    this.title = obj.title;
    this.passingScore = obj.passingScore;
    this.attemptLimit = obj.attemptLimit;
    this.difficulty = obj.difficulty;
    this.createdAt = new Date(obj.createdAt);
    this.updatedAt = new Date(obj.updatedAt);
  }
}
