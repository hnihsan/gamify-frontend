import { Subject } from "./Subject";

export class UserSubject {
  _id: string;
  subjectId: string;
  userId: string;
  completedAchievementIds: Array<string>;
  completedChallengeCodes: Array<string>;
  finishedChallengesCount: number;
  subject: Subject;
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this._id = obj._id;
    this.subjectId = obj.subjectId;
    this.userId = obj.userId;
    this.completedAchievementIds = obj.completedAchievementIds;
    this.completedChallengeCodes = obj.completedChallengeCodes || [];
    this.finishedChallengesCount = obj.finishedChallengesCount;
    this.subject = obj.subject;
    this.createdAt = new Date(obj.createdAt);
    this.updatedAt = new Date(obj.updatedAt);
  }
}
