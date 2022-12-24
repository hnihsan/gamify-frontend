export class User {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  organization: string;
  enrolledSubjectIds: Array<string>;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this._id = obj._id;
    this.fullname = obj.fullname;
    this.email = obj.email;
    this.phone = obj.phone;
    this.organization = obj.organization;
    this.enrolledSubjectIds = obj.enrolledSubjectIds;
    this.imageUrl = obj.imageUrl;
    this.createdAt = new Date(obj.createdAt);
    this.updatedAt = new Date(obj.updatedAt);
  }
}

export class NewUser {
  fullname: string;
  email: string;
  phone: string;
  organization: string;
  imageUrl: string;

  constructor(obj: any) {
    this.fullname = obj.fullname;
    this.email = obj.email.trim().toLowerCase();
    this.phone = obj.phone;
    this.organization = obj.organization;
    this.imageUrl = obj.imageUrl;
  }
}
