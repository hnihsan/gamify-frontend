export class Achievement {
  _id: string;
  subjectId: string;
  title: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this._id = obj._id;
    this.subjectId = obj.subjectId;
    this.title = obj.title;
    this.image = obj.image;
    this.description = obj.description;
    this.createdAt = new Date(obj.createdAt);
    this.updatedAt = new Date(obj.updatedAt);
  }
}
