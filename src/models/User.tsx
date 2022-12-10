export class User {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  organization: string;
  enrolledSubjectIds: Array<string>;
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this._id = obj._id;
    this.fullname = obj.fullname;
    this.email = obj.email;
    this.phone = obj.phone;
    this.organization = obj.organization;
    this.enrolledSubjectIds = obj.enrolledSubjectIds;
    this.createdAt = new Date(obj.createdAt);
    this.updatedAt = new Date(obj.updatedAt);
  }
}
