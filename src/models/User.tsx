export class User {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  organization: string;
  enrolledSubjectIds: Array<string>;
  imageUrl: string;
  points: number;
  progressLevel: string;
  avatarCode: string;
  frameCode: string;
  isAdmin: boolean;
  isQa: boolean;
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
    this.points = obj.points || 0;
    this.progressLevel = obj.progressLevel || "LEVEL_1";
    this.avatarCode = obj.avatarCode || "MALE1";
    this.frameCode = obj.frameCode || "FRAME11";
    this.isAdmin = obj.isAdmin || false;
    this.isQa = obj.isQa || false;
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

export class UserLeaderboard {
  _id: string;
  fullname: string;
  imageUrl: string;
  points: number;
  avatarCode: string;
  frameCode: string;

  constructor(obj: any) {
    this._id = obj._id;
    this.fullname = obj.fullname;
    this.imageUrl = obj.imageUrl;
    this.points = obj.points || 0;
    this.avatarCode = obj.avatarCode || "MALE1";
    this.frameCode = obj.frameCode || "FRAME11";
  }
}
