import { UserAttempt } from "./UserAttempt";

export class Challenge {
  _id: string;
  subjectId: string;
  title: string;
  passingScore: number;
  attemptLimit: number;
  difficulty: string;
  userAttempts: Array<UserAttempt>;
  attemptsCount: number;
  playerHighscore: number;
  duration: number;
  qCount: number;
  requiredChallengeCode: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
  order: number;

  constructor(obj: any) {
    this._id = obj._id;
    this.subjectId = obj.subjectId;
    this.title = obj.title;
    this.passingScore = obj.passingScore;
    this.attemptLimit = obj.attemptLimit;
    this.difficulty = obj.difficulty;
    this.duration = obj.duration;
    this.userAttempts = obj.userAttempts;
    this.attemptsCount = obj.attemptsCount;
    this.playerHighscore = obj.playerHighscore;
    this.requiredChallengeCode = obj.requiredChallengeCode;
    this.createdAt = new Date(obj.createdAt);
    this.updatedAt = new Date(obj.updatedAt);
    this.qCount = obj.qCount;
    this.code = obj.code;
    this.order = obj.order;
  }
}
