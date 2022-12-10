import { shuffleArray } from "../lib/Tools";

export class QuizOptions {
  id: number;
  content: string;
  isAnswer: boolean;

  constructor(obj: any) {
    this.id = obj.id;
    this.content = obj.content;
    this.isAnswer = obj.isAnswer;
  }
}

export class Quiz {
  _id: string;
  challengeId: string;
  question: string;
  answerType: string;
  options: Array<QuizOptions>;
  correctAnswer: Array<number>;
  createdAt: Date;
  updated: Date;

  checkAnswer(answer: Array<number>) {
    answer.sort();
    let isCorrect = answer + "" == this.correctAnswer + "";
    return isCorrect;
  }

  constructor(obj: any) {
    this._id = obj._id;
    this.challengeId = obj.challengeId;
    this.question = obj.question;
    this.answerType = obj.answerType;
    this.options =
      typeof obj.options == "undefined"
        ? []
        : shuffleArray(obj.options.map((op: any) => new QuizOptions(op)));
    this.correctAnswer = this.options
      .filter((x) => x.isAnswer == true)
      .map((x) => x.id)
      .sort();
    this.createdAt = new Date(obj.createdAt);
    this.updated = new Date(obj.updated);
  }
}
