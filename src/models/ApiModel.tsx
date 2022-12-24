export class InsertResponse {
  acknowledged: boolean;
  insertedId: string;
  message: string;

  constructor(obj: any) {
    this.acknowledged = obj.acknowledged;
    this.insertedId = obj.insertedId;
    this.message = obj.message;
  }
}
