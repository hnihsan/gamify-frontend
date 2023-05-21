import { Challenge } from "./Challenge";
import { Achievement } from "./Achievement";

export class Subject {
  _id: string;
  title: string;
  shortTitle: string;
  creator: string;
  lessons: string;
  difficulty: string;
  challengeCount: number;
  order: number;
  achievements: Array<Achievement>;
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this._id = obj._id;
    this.shortTitle = obj.shortTitle;
    this.title = obj.title;
    this.creator = obj.creator;
    this.lessons = obj.lessons;
    this.difficulty = obj.difficulty;
    this.challengeCount = obj.challengeCount || 0;
    this.order = obj.order || 0;
    this.achievements =
      typeof obj.achievements == "undefined"
        ? []
        : obj.achievements.map((ach: any) => new Achievement(ach));
    this.createdAt = new Date(obj.createdAt);
    this.updatedAt = new Date(obj.updatedAt);
  }
}
