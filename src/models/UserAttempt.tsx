export class UserAttempt {
  _id: string;
  userId: string;
  challengeId: string;
  score: number;
  duration: number; // in second
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this._id = obj._id;
    this.challengeId = obj.challengeId;
    this.userId = obj.userId;
    this.score = obj.score;
    this.duration = obj.duration;
    this.createdAt = new Date(obj.createdAt);
    this.updatedAt = new Date(obj.updatedAt);
  }
}

export class SubmitUserAttempt_VM {
  userId: string;
  challengeId: string;
  subjectId: string;
  score: number;
  duration: number; // in second

  constructor(obj: any) {
    this.challengeId = obj.challengeId;
    this.subjectId = obj.subjectId;
    this.userId = obj.userId;
    this.score = obj.score;
    this.duration = obj.duration;
  }
}
