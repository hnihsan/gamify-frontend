export class LoggedInModel {
  email: string;
  fullname: string;
  imageUrl: string;
  userId: string;

  constructor(obj: any) {
    this.email = obj.email;
    this.fullname = obj.fullname;
    this.imageUrl = obj.imageUrl;
    this.userId = obj.userId;
  }
}
