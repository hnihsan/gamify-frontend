export class Achievement {
  _id: string;
  subjectId: string;
  title: string;
  code: string;
  description: string;
  successMessage: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this._id = obj._id;
    this.subjectId = obj.subjectId;
    this.title = obj.title;
    this.code = obj.code;
    this.description = obj.description;
    this.successMessage = obj.successMessage;
    this.createdAt = new Date(obj.createdAt);
    this.updatedAt = new Date(obj.updatedAt);
  }
}
